var express = require('express');
var app = express();

// This responds with "input/output" of the program
app.get('/', function (req, res) {
	console.log("Got a GET request for the homepage");
	req.accepts('js');



	const fs = require('fs');
	const child_process = require('child_process');


	const readline = require('readline');

	var option =
		{

			timeout: 5000,
			maxBuffer: 1,// If this value is exceeded, then the child process is terminated.
			killSignal: 'SIGKILL' //system kill command

		}



		var restart = function () {
		const rl = readline.createInterface
			({
				input: process.stdin,
				output: process.stdout

			});

		console.log("\n");
		rl.question('Program you want to run? ', (answer) => {
			//console.log(`This is your Program name: ${answer}`);



			var filename = `${answer}`;

			var A1 = filename.split(".");// just return the last array element 

			var ext = A1[1];


			if (ext == 'c') {
				var fn = `${answer}`;
				var on = fn.split("\.")[0];

				//console.log(fn);
				//console.log(on);

				var complile = child_process.exec('gcc -o ' + on + ' ' + fn, function (err, stdout, stderr) {

					if (err) {
						res.status(400).send(err);
						restart();
					}
					else if (stderr) {
						res.status(200).send(stderr);
						restart();
					}
						
			else {
				var start = new Date();
				//var cmd='./'+on;
				//cmd=cmd.trim();
				var run = child_process.exec('./' + on, option, function (err, stdout, stderr)//+on is used to access the variable
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
							
						res.status(200).send(stderr);
						restart();

				});

			}

		});
	}
	else if (ext == 'cpp') {
 			var fn=`${answer}`;
 			var on=fn.split("\.")[0];
 			
 			//console.log(fn);
 			//console.log(on);
 			
			var complile= child_process.exec('g++ -o '+on+' '+fn,function(err,stdout,stderr)
			{
				
				if (err) {
						res.status(400).send(err);
						restart();
					}
					else if (stderr) 
					{
						res.status(200).send(stderr);
						restart();
					}
				else
				{
					var start = new Date();
					var run= child_process.exec('./'+on,option,function(err,stdout,stderr)
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
							
						res.status(200).send(stderr);
						restart();
						
					});
				}		
		
			});
		}
			else if (ext == 'java') {
				var complile = child_process.exec(`javac ${answer}`, function (err, stdout, stderr) {
					if (err) {
						res.status(400).send(err);
						restart();
					}
					else if (stderr) {
						res.status(400).send(stderr);
						restart();
					}
					
					else {
						var mystring = `${answer}`;
						mystring = mystring.replace('.java', '');

						//console.log(mystring);

						var start = new Date();
						var run = child_process.exec(`java ${mystring}`, option, function (err, stdout, stderr) {


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
						restart();

						});
					}

				});
			}
			else if (ext == 'py') {
				var start = new Date();
				var run = child_process.exec(`python ${answer}`, option, function (err, stdout, stderr) 
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
							
						res.status(200).send(stderr);
						restart();




				});
			}
			else {
				res.send("Please give only C,C++,Java or Python file to Run.\nThank you!");

			}

			//}
			rl.close();


		});

	}
	restart();

	//res.send('Hello GET');
})

		
//GET Method
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      program_name:req.query.program_name,
      
   };
   //console.log(response);
   res.end(JSON.stringify(response));
})


// This responds a POST request for the homepage
	app.post('/', function (req, res) {
	console.log("Got a POST request for the homepage");
	res.send('Hello POST');
	})




// This responds a DELETE request for the /del_user page.
	app.delete('/del_user', function (req, res) {
	console.log("Got a DELETE request for /del_user");
	res.send('Hello DELETE');
	})

// This responds a GET request for the /list_user page.
	app.get('/list_user', function (req, res) {
	console.log("Got a GET request for /list_user");
	res.send('Page Listing');
	})

	// This responds a GET request for abcd, abxcd, ab123cd, and so on
	app.get('/ab*cd', function (req, res) {
	console.log("Got a GET request for /ab*cd");
	res.send('Page Pattern Match');
	})

var server = app.listen(8081, function () {

var host = server.address().address
var port = server.address().port

console.log("Example app listening at http://%s:%s", host, port)
})
