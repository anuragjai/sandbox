var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
/*
app.get('/*', function (req, res) {
	console.log((req.query));
	res.send(req.query.filename);
});
*/
app.get('/compile/:filename', function (req, res) {
	console.log("Got a GET request for the compile");
	req.accepts('js');

	const fs = require('fs');
	const child_process = require('child_process');

	const filename = req.params.filename;
	console.log(filename);
	compileCode(filename);
	//const readline = require('readline');
	/*
	var option =
		{
			timeout: 5000,
			maxBuffer: 1,// If this value is exceeded, then the child process is terminated.
			killSignal: 'SIGKILL' //system kill command
		}
	*/
	/*
	const rl = readline.createInterface
		({
			input: process.stdin,
			output: process.stdout

		});
	*/
	//console.log("\n");
	//rl.question('Program you want to run? ', (answer) => {
	
	function compileCode(filename) {
		//console.log(`This is your Program name: ${answer}`)

		//var filename = `${answer}`;
		//var A1=filename.split(".");// just return the last array element 
		//var ext =A1[1];

		var lastIndexOfDot = filename.lastIndexOf('.');
		var ext = filename.slice(lastIndexOfDot + 1);
		//console.log(ext);
		var filenameWithoutExt = filename.slice(0, lastIndexOfDot);
		
		var compileCommand;
		if (ext == 'c') {
			compileCommand = 'gcc -o ' + filenameWithoutExt + ' ' + filename;
		} else if (ext == 'cpp') {
			compileCommand = 'g++ -o ' + filenameWithoutExt + ' ' + filename;
		} else if (ext == 'java') {
			compileCommand = 'javac ' + filename;
		} else {
			res.send("Please give only C,C++ or Java file to compile.\nThank you!");
			return;
		}
		var complile = child_process.exec(compileCommand, function (err, stdout, stderr) {
			/*res.status(200),send({
				err: err,
				stdout: stdout,
				stderr: stderr
			});*/
			if(stderr){
				res.status(400).send({
					message: 'Compile Error',
					error: stderr
				});
			}else if(err){
				res.status(400).send({
					message: 'Execution Error',
					error: err
				});
			}else{
				res.status(200).send({
					message: 'Compile Successful',
				});
			}
		});
	}//end of function complileCode
		//rl.close();
})

app.get('/run/:filename', function (req, res) {
	console.log("Got a GET request for the Run");
	req.accepts('js');


	const fs = require('fs');
	const child_process = require('child_process');
	const filename = req.params.filename;
	console.log(filename);
	runCode(filename);


	//const readline = require('readline');

	var option =
		{

			timeout: 5000,
			maxBuffer: 1,// If this value is exceeded, then the child process is terminated.
			killSignal: 'SIGKILL' //system kill command

		}
		/*
	const rl = readline.createInterface
		({
			input: process.stdin,
			output: process.stdout

		});
		*/
	//console.log("\n");
	//rl.question('Program you want to run? ', (answer) => {
		//console.log(`This is your Program name: ${answer}`);

		function runCode(filename) {

		/*var filename = `${answer}`;

		var A1 = filename.split(".");// just return the last array element 

		var ext = A1[1];
		*/
		var lastIndexOfDot = filename.lastIndexOf('.');
		var ext = filename.slice(lastIndexOfDot + 1);
		//console.log(ext);
		var filenameWithoutExt = filename.slice(0, lastIndexOfDot);

		if (ext == 'c') {
			//var fn = `${answer}`;
			//var on = fn.split("\.")[0];

			var start = new Date();
			//var cmd='./'+on;
			//cmd=cmd.trim();
			var run = child_process.exec('./' + filename, option, function (err, stdout, stderr)//+on is used to access the variable
			{

				var end = new Date() - start;
				console.info("Execution time: %dms", end);

				var heapUsed = process.memoryUsage().heapUsed;
				var heapMsg = "Program is using " + heapUsed + " bytes of Heap.";
				var responseObj =
					{
						err: err,
						stdout: stdout,
						stderr: stderr,
						heapMsg: heapMsg,
					}

				res.status(200).send(responseObj);


			});

		}
		else if (ext == 'cpp') {
			//var fn = `${answer}`;
			//var on = fn.split("\.")[0];


			var start = new Date();
			var run = child_process.exec('./' + filename, option, function (err, stdout, stderr) {

				var end = new Date() - start;
				console.info("Execution time: %dms", end);

				var heapUsed = process.memoryUsage().heapUsed;
				var heapMsg = "Program is using " + heapUsed + " bytes of Heap.";
				var responseObj =
					{
						err: err,
						stdout: stdout,
						stderr: stderr,
						heapMsg: heapMsg,
					}

				res.status(200).send(stderr);


			});


		}
		else if (ext == 'java') {

			///var mystring = `${answer}`;
			//mystring = mystring.replace('.java', '');

			//console.log(mystring);

			var start = new Date();
			var run = child_process.exec(`java filenameWithoutExt`, option, function (err, stdout, stderr) {


				var end = new Date() - start;
				console.info("Execution time: %dms", end);

				var heapUsed = process.memoryUsage().heapUsed;
				var heapMsg = "Program is using " + heapUsed + " bytes of Heap.";
				var responseObj =
					{
						err: err,
						stdout: stdout,
						stderr: stderr,
						heapMsg: heapMsg,
					}

				res.status(200).send(stderr);


			});
		}

		else if (ext == 'py') {
			var start = new Date();
			var run = child_process.exec(`python filename`, option, function (err, stdout, stderr) {

				var end = new Date() - start;
				console.info("Execution time: %dms", end);

				var heapUsed = process.memoryUsage().heapUsed;
				var heapMsg = "Program is using " + heapUsed + " bytes of Heap.";
				var responseObj =
					{
						err: err,
						stdout: stdout,
						stderr: stderr,
						heapMsg: heapMsg,
					}

				res.status(200).send(stderr);





			});
		}
		else {
			res.send("Please give only C,C++,Java or Python file to Run.\nThank you!");

		}

		
		//rl.close();
	}//end of function complileCode

})

// This responds a POST request for the homepage





/*
// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) 
{
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})


// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) 
{
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})


// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) 
{   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})
*/

var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})
