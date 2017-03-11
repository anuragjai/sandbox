const fs = require('fs');
const child_process = require('child_process');

	const readline = require('readline');	
	
	var option =	{
			timeout: 5000,
			maxBuffer: 256000*1024,
			killSignal: 'SIGKILL' //system kill command
			}
	

var restart=function()
{
	const rl = readline.createInterface
	({
  		input: process.stdin,
  		output: process.stdout
		
	});

	console.log("\n");
	rl.question('Program you want to run? ',(answer) => 
	{  	
		console.log(`This is your Program name: ${answer}`);


	//for(var i=0;i<1;i++)
	//{
			
		var filename=`${answer}`;
		
		var A1=filename.split(".");
		 
		//var A2=filename.split("."); 
		
		var ext =A1[1]; // just return the last array element 
		
		//var ext =A2[1];
		
		//console.log("A1 is",A1[1]);
		//console.log("A2 is",A2[1]);
		
		if(ext=='c')
		{
 			
			var complile= child_process.exec(`gcc ${answer}`,function(err,stdout,stderr)
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
	
					var run= child_process.exec('./a.out',option,function(err,stdout,stderr)
					{	
						
						var end = new Date()-start; //Execution time function
						
						console.log("err");
						console.log(err.message);
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
		else if(ext=='java')
		{
			var complile= child_process.exec(`javac ${answer}`,function(err,stdout,stderr)
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
					var mystring = `${answer}`;
					mystring = mystring.replace('.java','');
					
					//console.log(mystring);
					
					var start = new Date();
					var run= child_process.exec(`java ${mystring}`, option,function(err,stdout,stderr)
					{
						
						var end = new Date()-start; //Execution time function
						
						console.log("err");
						console.log(err);
						console.log("stdout");
						console.log(stdout.option);
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
		else
		{
			console.log("Please give only C or Java file to Run.\nThank you!");
	
		}
		
	//}
	   rl.close();
	

	});
	
}
restart();

