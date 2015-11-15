var express = require('express');
var app = express();
var http = require('http').Server(app); // Http server
var path = require('path');
var bodyParser = require("body-parser"); // Require Body parser module

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Body parser use JSON data



//getting all the static files on the server
app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'data')));
app.use(express.static(path.join(__dirname, 'templates')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'font-awesome')));
app.use(express.static(path.join(__dirname, 'fonts')));
app.use(express.static(path.join(__dirname, 'less')));
app.use(express.static(path.join(__dirname, 'controller')));

//creating routes
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

http.listen("3000");
console.log("Listening to port 3000");