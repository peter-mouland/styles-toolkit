var express = require('express');
var app = express();
var path = require('path');

app.use('/dist', express.static(path.join(__dirname, '../', 'dist')));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/examples', express.static(__dirname + '/examples'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
