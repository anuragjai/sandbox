const child_process = require('child_process');
var obj = {
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
	},//end of function complileCode(GET)
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
		child_process.exec(runCommand, option, function (err, stdout, stderr) {
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
			callback(response);
		});
	} //end of run code
}

module.exports = obj;