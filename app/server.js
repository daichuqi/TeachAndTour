var express = require('express');
var server = express();
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

server.use('/', express.static(path.join(__dirname, '/build')));
server.use('/assets', express.static(path.join(__dirname, '/assets')));
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('listening on port', port);

module.exports = server;