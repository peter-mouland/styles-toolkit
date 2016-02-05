var express = require('express');
var app = express();
var path = require('path');

app.use('../dist', express.static(__dirname + '../dist'));
app.use('/styles', express.static(__dirname + '/styles'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
