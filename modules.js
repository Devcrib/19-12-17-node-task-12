//sample code of using core modules in node.

var http = require('http'); //core module

var port = process.env.PORT || 8080;

var server = http.createServer(function (req,res){
  console.log('Server is Running');
});
server.listen(port, () => {
});



//sample code of using local modules
//Example 1
var http = require('http'); //core module
var app = require('./app'); //app here is a local module from app.js

var port = process.env.PORT || 8080;
app.set('port', port);

var server = http.createServer(app);

server.listen(port, () => {
});

// app.js referenced above
var express= require('express'); //core module

var app = express();

app.get('/', (req, res) =>
res.status(202).send({ message: 'Please enter HTTP Request' }));

module.exports = app;

//Example 2

//msg.js
module.exports = 'Just trying this'; //export string

//use.js
var msg = require('./msg.js');

console.log(msg); //this will log 'Just trying this' to the console.


//msg.js
//export properties of an object
module.exports.justObject = 'Trying this with Objects properties';

//use.js
var msg = require('./msg.js');

console.log(msg.justObject); // this will log 'Trying this with Objects properties' to the console


//Example 3

//msg.js
module.exports.write = function (stringText) {
  console.log(stringText);
};

//use.js
var msg = require('./write.js');

msg.log('Trying with a function property');

