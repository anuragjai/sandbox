var express = require('express');
var app = express();
var myService = require('./service.js');
var path = require('path');
var multer = require('multer');
const upload = multer({ dest: './uploads/' });
var file = upload.single('file');

var storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './uploads/')
	},
	filename: function (req, file, callback) {
		console.log(file);
		callback(null, file.originalname)
	}
})

// This responds a POST request for the file upload

app.post('/file/:filename', function (req, res) {
	console.log("Got a POST request for the file upload");
	const filename = req.params.filename;
	console.log(filename);
	
	function Callback(response) {
		if (response.success) {
			res.status(200).send(response);
		} else {
			res.status(400).send(response);
		}
	}
	var upload = multer({ storage: storage }).single('file');
	upload(req, res, function (err) {
		if(err){
			console.log(err);
			res.status(400).send({
				message: 'Error in uploading file',
				error: err,
				success: false
			});
		} else {
			myService.file(filename, Callback);// change
		}
			
    })

})

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

// This responds a POST request for the run

app.post('/run/:filename', function (req, res) {
	console.log("Got a POST request for the Run");
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

var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("app listening at http://%s:%s", host, port)
})

