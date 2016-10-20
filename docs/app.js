var express = require('express');
var app = express();
var path = require('path');

app.use('/dist', express.static(path.join(__dirname, '../', 'dist')));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/scripts', express.static(__dirname + '/scripts'));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/:page.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/' + req.params.page + '.html'));
});

app.listen(8080);
