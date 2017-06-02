var express = require('express');        //load express module set's as a var
var bodyparser = require('body-parser'); //load bodyparser module set's as a var
var app = express();                     //instantiate express as var


app.use('/api', require('../routes/urlshortener.js')(express)); //sets the base of the url

var port = 3000; //load port 3000 as var

var server = app.listen(port, function(){              //listens to server and prints to terminal
  console.log('Our server is running on Port', port);
});

module.exports = server; //exports the server
