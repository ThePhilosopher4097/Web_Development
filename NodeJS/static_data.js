
// Images using HTTP

var http = require('http');
var NodeStatic = require('node-static');
var FileServer = new NodeStatic.Server('D:\\Programming\\HTML CSS\\NodeJS\\kitten.png');

app1 = http.createServer(function(request, response){
    FileServer.serve(request, response);
});
app1.listen(5000);



// Images using express

var express = require('express');
var app2 = express();
app2.use('/media', express.static('D:\\Programming\\HTML CSS\\NodeJS\\cheems.webp'));
app2.listen(3000);
