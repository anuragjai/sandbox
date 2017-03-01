var express=require('express');
var app=express();
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.set('port',(process.env.PORT || process.argv[2]))
var server = app.listen(app.get('port'), function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port)
})
