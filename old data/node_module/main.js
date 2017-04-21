const fs = require('fs');
const child_process = require('child_process');
/*var buf = new Buffer(50*1024*1024);
var options = {
  		timeout: 250,
  		maxBuffer: 200*1024,
		killSignal: 'SIGKILL'
		}
*/

	const readline = require('readline');	
	

var restart=function()
{
	const rl = readline.createInterface
	({
  		input: process.stdin,
  		output: process.stdout
		
	});


	rl.question('Program you want to run? ',(answer) => 
	{  	
		console.log(`This is your Program name: ${answer}`);


		//for(var i=0;i<1;i++)
		//{	
			
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
					var run= child_process.exec('./a.out',function(err,stdout,stderr)
					{
					
							
					/*var fs = require('fs');
					fs.readFile(`${answer}`, function (err, data)
					{
  						if (err) 
  						throw err;
 						console.log(data);
					});
					*/	
						
						console.log("err");
						console.log(err);
						console.log("stdout");
						console.log(stdout);
						console.log("stderr");
						console.log(stderr);
						restart();
					});
				}		
		
			});	
	
		//}
			rl.close();

	});
}
restart();

