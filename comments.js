// Create web server
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

// Create socket.io
var io = require('socket.io').listen(server);

// Listen on port 3000
server.listen(3000, function(){
    console.log('listening on *:3000');
});