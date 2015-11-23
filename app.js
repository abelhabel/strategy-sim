var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname +'/index.html');
});

app.get('/js/:fileName', function(req, res) {
  console.log(req.params.fileName);
  res.sendFile(__dirname + '/' + req.params.fileName);
});

app.listen(3000);
