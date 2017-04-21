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
			//var ext = A1[1];
			
			
			var lastIndexOfDot = filename.lastIndexOf('.');
			var ext = filename.slice(lastIndexOfDot + 1);
			//console.log(ext);
			var filenameWithoutExt = filename.slice(0, lastIndexOfDot);


			if (ext == 'c') {
				//var fn = `${answer}`;
				//var on = fn.split("\.")[0];

				//console.log(fn);
				//console.log(on);

			var complile = child_process.exec('gcc -o ' + filenameWithoutExt + ' ' + filename,option, function (err, stdout, stderr) {

				console.log("err");
				console.log(err);
				console.log("stdout");
				console.log(stdout);
				console.log("stderr");
				console.log(stderr);
				if (err)
				{
					console.log(err);
					restart();
	    
				}
				else if(stderr)
				{
					console.log(stderr);
					restart();

				}	
				
			else {
				var start = new Date();
				//var cmd='./'+on;
				//cmd=cmd.trim();
			var run = child_process.exec('./' + filename, option, function (err, stdout, stderr)//+on is used to access the variable
			{
							
						var end = new Date() - start;
						console.log("err");
						console.log(err.code);
						console.log("stdout");
						console.log(stdout);
						console.log("stderr");
						console.log(stderr);
	
						console.info("Execution time: %dms", end);
		
						var heapUsed = process.memoryUsage().heapUsed;
						console.log("Program is using " + heapUsed + " bytes of Heap.");
						restart();

				});

			}

		});
	}
	else if (ext == 'cpp') {
 			//var fn=`${answer}`;
 			//var on=fn.split("\.")[0];
 			
 			//console.log(fn);
 			//console.log(on);
 			
			var complile= child_process.exec('g++ -o '+ filenameWithoutExt +' '+ filename,option,function(err,stdout,stderr)
			{
				
				console.log("err");
				console.log(err);
				console.log("stdout");
				console.log(stdout);
				console.log("stderr");
				console.log(stderr);
				if (err)
				{
					console.log(err);
					restart();
	    
				}
				else if(stderr)
				{
					console.log(stderr);
					restart();

				}
				else
				{
					var start = new Date();
					var run= child_process.exec('./'+ filename,option,function(err,stdout,stderr)
					{	
						var end = new Date()-start;
						
						console.log("err");
						console.log(err.code);
						console.log("stdout");
						console.log(stdout);
						console.log("stderr");
						console.log(stderr);

						
						console.info("Execution time: %dms", end);
		
						var heapUsed = process.memoryUsage().heapUsed;
						console.log("Program is using " + heapUsed + " bytes of Heap.");
						
						restart();
						
					});
				}		
		
			});
		}
			else if (ext == 'java') {
				var complile = child_process.exec(`javac filename`, option,function (err, stdout, stderr) {
				
				console.log("err");
				console.log(err);
				console.log("stdout");
				console.log(stdout);
				console.log("stderr");
				console.log(stderr);
				if (err)
				{
					console.log(err);
					restart();
	    
				}
				else if(stderr)
				{
					console.log(stderr);
					restart();
				}
					
				else {
					//var mystring = `${answer}`;
					//mystring = mystring.replace('.java','');
					
					//console.log(mystring);
					
					var start = new Date();
					var run= child_process.exec(`java filenameWithoutExt`,option,function(err,stdout,stderr)
					{
			
						
						var end = new Date()-start; //Execution time function
						
						console.log("err");
						console.log(err);
						console.log("stdout");
						console.log(stdout);
						console.log("stderr");
						console.log(stderr);
						
						console.info("Execution time: %dms", end);
		
						var heapUsed = process.memoryUsage().heapUsed;
						console.log("Program is using " + heapUsed + " bytes of Heap.");
						
						restart();

						});
					}

				});
			}
			else if (ext == 'py') {
				var start = new Date();
				var run = child_process.exec(`python filename`, option, function (err, stdout, stderr) 
				{
					
				var end = new Date()-start;
						
				console.log("err");
				console.log(err);
				console.log("stdout");
				console.log(stdout);
				console.log("stderr");
				console.log(stderr);
				
				console.info("Execution time: %dms", end);
		
				var heapUsed = process.memoryUsage().heapUsed;
				console.log("Program is using " + heapUsed + " bytes of Heap.");
						
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

