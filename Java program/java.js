const fs = require('fs');
const child_process = require('child_process');


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
					
					
					var run= child_process.exec(`java ${mystring}`,function(err,stdout,stderr)
					{
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

