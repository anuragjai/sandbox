const child_process = require('child_process');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
var file = upload.single('file');
var fs = require('fs');

var obj = {
	file: function fileUpload(filename, callback) {
		var lastIndexOfDot = filename.lastIndexOf('.');
		var ext = filename.toLowerCase().slice(lastIndexOfDot + 1);
		//console.log(ext);
		var filenameWithoutExt = filename.slice(0, lastIndexOfDot);
		var fileContents = fs.readFileSync(filename, 'utf8');
		function compileCallback(res) {
			if (res.success) {
				obj.run(filename, runCallback);
			} else {
				res.fileContents = fileContents;
				callback(res);
			}
		}

		function runCallback(res){
			res.fileContents = fileContents;
			callback(res);
		}

		var response;
		
		if (ext === 'c' || ext === 'cpp' || ext === 'java' || ext === 'py') {
			if (ext === 'py') {
				obj.run(filename, runCallback);
			} else {
				obj.compile(filename, compileCallback);
			}
			return;
		} else {
			response = {
				success: false,
				message: "Error in saving file. Please give only C,C++,Java or Python file.",
				fileContents: fileContents
			};
			callback(response);
			return;
		}

	},//end of function file_upload(post)
	compile: function compileCode(filename, callback) {
		var lastIndexOfDot = filename.lastIndexOf('.');
		var ext = filename.slice(lastIndexOfDot + 1);
		//console.log(ext);
		var filenameWithoutExt = filename.slice(0, lastIndexOfDot);
		var response;
		var compileCommand;
		if (ext == 'c') {
			compileCommand = 'gcc -o ' + filenameWithoutExt + ' ' + filename;
		} else if (ext == 'cpp') {
			compileCommand = 'g++ -o ' + filenameWithoutExt + ' ' + filename;
		} else if (ext == 'java') {
			compileCommand = 'javac ' + filename;
		} else {
			response = {
				success: false,
				message: "Please give only C,C++ or Java file to compile.\nThank you!"
			};
			callback(response);
			return;
		}

		var complile = child_process.exec(compileCommand, function (err, stdout, stderr) {

			if (stderr) {
				response = {
					success: false,
					message: 'Compile Error',
					error: stderr
				}
			} else if (err) {
				response = {
					success: false,
					message: 'Execution Error.',
					error: err
				}
			} else {
				response = {
					success: true,
					message: 'Compile Successful',
					data: stdout
				}
			}
			callback(response);
		});
	},//end of function complileCode(post)
	run: function runCode(filename, callback) {

		var lastIndexOfDot = filename.lastIndexOf('.');
		var ext = filename.slice(lastIndexOfDot + 1);
		var filenameWithoutExt = filename.slice(0, lastIndexOfDot);
		var response;
		var runCommand;
		if (ext == 'c') {
			runCommand = './' + filenameWithoutExt;
		} else if (ext == 'cpp') {
			runCommand = './' + filenameWithoutExt;
		} else if (ext == 'java') {
			runCommand = 'java ' + filenameWithoutExt;
		} else if (ext == 'py') {
			runCommand = 'python ' + filename;
		}
		else {
			response = {
				success: false,
				message: "Please give only C, C++, Java or Python file to run. Thank you!"
			};
			callback(response);
			return;
		}
		var option = {
			timeout: 5000,
			maxBuffer: 256000,// If this value is exceeded, then the child process is terminated.
			killSignal: 'SIGKILL' //system kill command
		}
		var start = new Date();
		child_process.exec(runCommand, option, function (err, stdout, stderr) {
			var end = new Date() - start; //Execution time function

			if (stderr) {
				response = {
					success: false,
					message: 'Runtime Error',
					error: stderr
				}
			} else if (err) {
				response = {
					success: false,
					message: 'Execution Error.',
					error: err
				}
			} else {
				response = {
					success: true,
					message: 'Run Successful',
					data: stdout
				}
			}
			setTimeout(function (argument) {
				console.info("Execution time: %dms", end);
			}, 5000);
			var heapUsed = process.memoryUsage().heapUsed;
			var netHeapUsed = Math.round(heapUsed / 1024 / 1024);
			console.log("Program is using " + netHeapUsed + " Megabytes of Heap.");

			callback(response);
		});
	} //end of run code
}

module.exports = obj;