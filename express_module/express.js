var express = require('express');
var app = express();
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
	
	function compileCode(filename) {

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
	}//end of function complileCode(GET)
})

app.get('/run/:filename', function (req, res) {
	console.log("Got a GET request for the Run");
	req.accepts('js');


	const fs = require('fs');
	const child_process = require('child_process');
	const filename = req.params.filename;
	console.log(filename);
	runCode(filename);

	var option ={

			timeout: 5000,
			maxBuffer: 1,// If this value is exceeded, then the child process is terminated.
			killSignal: 'SIGKILL' //system kill command

		}
	

		function runCode(filename) {

		var lastIndexOfDot = filename.lastIndexOf('.');
		var ext = filename.slice(lastIndexOfDot + 1);
		//console.log(ext);
		var filenameWithoutExt = filename.slice(0, lastIndexOfDot);

		var runCommand;
		if (ext == 'c') {
			runCommand = './' + filename;
		} else if (ext == 'cpp') {
			runCommand = './' + filename;
		} else if (ext == 'java') {
			runCommand = 'java ' + filenameWithoutExt;
		}
		  else if (ext == 'py'){
			runCommand = 'python' + filename;
		  }
		 else {
			res.send("Please give only C,C++ or Java file to Run.\nThank you!");
			return;
		}

		var run = child_process.exec(runCommand, option,function (err, stdout, stderr) {
			/*res.status(200),send({
				err: err,
				stdout: stdout,
				stderr: stderr
			});*/
			if(stderr){
				res.status(400).send({
					message: 'Error',
					error: stderr
				});
			}else if(err){
				res.status(400).send({
					message: 'Execution Error',
					error: err
				});
			}else{
				res.status(200).send({
					message: 'Run Successful',
				});
			}
		});
		
	}//end of function runCode(GET)

})

// This responds a POST request for the homepage
app.post('/compile/:filename', function (req, res) {
	console.log("Got a GET request for the compile");
	req.accepts('js');

	const fs = require('fs');
	const child_process = require('child_process');

	const filename = req.params.filename;
	console.log(filename);
	
	compileCode(filename);
	
	function compileCode(filename) {

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
	}//end of function complileCode(POST)
})

app.post('/run/:filename', function (req, res) {
	console.log("Got a GET request for the Run");
	req.accepts('js');


	const fs = require('fs');
	const child_process = require('child_process');
	const filename = req.params.filename;
	console.log(filename);
	runCode(filename);

	var option ={

			timeout: 5000,
			maxBuffer: 1,// If this value is exceeded, then the child process is terminated.
			killSignal: 'SIGKILL' //system kill command
		}
	

		function runCode(filename) {

		var lastIndexOfDot = filename.lastIndexOf('.');
		var ext = filename.slice(lastIndexOfDot + 1);
		//console.log(ext);
		var filenameWithoutExt = filename.slice(0, lastIndexOfDot);

		var runCommand;
		if (ext == 'c') {
			runCommand = './' + filename;
		} else if (ext == 'cpp') {
			runCommand = './' + filename;
		} else if (ext == 'java') {
			runCommand = 'java ' + filenameWithoutExt;
		}
		  else if (ext == 'py'){
			runCommand = 'python' + filename;
		  }
		 else {
			res.send("Please give only C,C++ or Java file to Run.\nThank you!");
			return;
		}

		var run = child_process.exec(runCommand, option,function (err, stdout, stderr) {
			/*res.status(200),send({
				err: err,
				stdout: stdout,
				stderr: stderr
			});*/
			if(stderr){
				res.status(400).send({
					message: 'Error',
					error: stderr
				});
			}else if(err){
				res.status(400).send({
					message: 'Execution Error',
					error: err
				});
			}else{
				res.status(200).send({
					message: 'Run Successful',
				});
			}
		});
		
	}//end of function runCode (POST)

})




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

