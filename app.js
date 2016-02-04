var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(__dirname + '/public'));
app.use('/app/styles', express.static(__dirname + '/app/styles'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
