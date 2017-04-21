var child_process = require('child_process');
var exec = child_process.exec;
var options = {
  timeout: 250,
  maxBuffer: 200*1024,
  killSignal: 'SIGKILL'
}

//exec(command, [options], callback);
exec('node bubblesort.js',options,  function(err,stdout,stderr) {
	console.log(stdout);
  if (err) {
    console.log('Child process exited with error code', err.signal);
    
  }
  
});