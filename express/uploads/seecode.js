var fs = require('fs');

fs.readFile('count.py', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});




fs.readFile('filename', 'utf8', function (err, data) { // to print the content or code
				if (err){
				 return console.log(err);
			}
				console.log(data);
			});
