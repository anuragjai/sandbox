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
