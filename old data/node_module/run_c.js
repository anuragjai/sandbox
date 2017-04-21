const child_process = require('child_process');
var exec = child_process.exec;

const readline = require('readline');

var restart=function()
{

	const rl = readline.createInterface
	({
  		input: process.stdin,
  		output: process.stdout
	});

	rl.question('Which Program you want to run? ',(answer) => 
	{  	
		console.log(`This is your Program name?: ${answer}`);

		exec(`gcc ${answer}`,  function(err,stdout,stderr) 
  		{
			console.log(err);
			console.log(stdout);
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
				exec('./a.out',  function(err,stdout,stderr) 
	  			{
					console.log(err);
					console.log(stdout);
					console.log(stderr);
  		
				restart();
  
	  			});
			}	

   		});

		rl.close(); 
	});
}
restart();
