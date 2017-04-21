var express = require('express');
var app = express();
var myService = require('./service.js');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
var file = upload.single('file');

//var bodyParser = require('body-parser');

/*const uploading = multer({
  	dest: 'uploads/',
  	limits: {fileSize: 1000000, files:1},
	})
app.post('/file/:filename', uploading, function(req, res) {
*/

// This responds a POST request for the file upload

app.post('/file/:filename', file, function (req, res){
	console.log("Got a POST request for the file upload");
	const filename = req.params.filename;
	console.log(filename);
	myService.file(filename, Callback);
	function Callback(response) {
		if (response.success) {
			res.status(200).send(response);
		} else {
			res.status(400).send(response);
		}
	}	
})

/*
app.get('/*', function (req, res) {
	console.log((req.query));
	res.send(req.query.filename);
});
*/
// This responds a POST request for the Compile

app.post('/compile/:filename', function (req, res) {
	console.log("Got a POST request for the compile");
	const filename = req.params.filename;
	console.log(filename);
	myService.compile(filename, myCallback);
	function myCallback(response) {
		if (response.success) {
			res.status(200).send(response);
		} else {
			res.status(400).send(response);
		}
	}
})

app.post('/run/:filename', function (req, res) {
	const filename = req.params.filename;
	var lastIndexOfDot = filename.lastIndexOf('.');
	var ext = filename.slice(lastIndexOfDot + 1);
	console.log(filename);

	function myCallback(response) {
		if (response.success) {
			res.status(200).send(response);
		} else {
			res.status(400).send(response);
		}
	}
	function myCompileCallback(response) {
		if (response.success) {
			myService.run(filename, myCallback);
		} else {
			res.status(400).send(response);
		}
	}
	if (ext === 'py') {
		myService.run(filename, myCallback);
	} else {
		myService.compile(filename, myCompileCallback);
	}

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

	console.log("app listening at http://%s:%s", host, port)
})

