const child_process = require('child_process');
var exec = child_process.exec;

exec('gcc stackover.c',  function(err,stdout,stderr) {
	console.log(err);
	console.log(stdout);
	console.log(stderr);
  if (err) {
	console.log("...");
    console.log(stderr);
    
  }
  
});
