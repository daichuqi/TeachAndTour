var express = require('express');
var server = express();
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var db = require('./db.js');
server.use(bodyParser.json());
server.use('/', express.static(path.join(__dirname, '/build')));
server.use('/assets', express.static(path.join(__dirname, '/assets')));
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});


server.post('/login', function(req, res) {
  db.login(req.body.username, req.body.password, function(response) {
    res.send(response);
  })
})

server.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  db.signup(username, password, email, function(response) {
    res.send(response);
  });
})


var port = process.env.PORT || 3000;
server.listen(port);
console.log('listening on port', port);

module.exports = server;