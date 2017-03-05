var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/scanner.js', function(req, res){
  res.sendFile(__dirname + '/scanner.js');
});

app.get('/scanner.css', function(req, res){
  res.sendFile(__dirname + '/scanner.css');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});





