var express = require('express');
var path = require('path');

//init app
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

var server = require("http").Server(app);
server.listen(3000);


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
//set routes

var tung = require('./routes/tung.js');

app.use('/',tung);
