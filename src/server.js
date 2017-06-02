//load express module
var express = require('express')
//var urlshortener = require('urlString')
const tool = require('../routes/urlshortener.js');

//instantiate express as var
var app = express();

//load port 3000 as var
var port = 3000;

//allow alphaNumeric to print random 5
var shortURL = tool.genURL(5);

//create route to test
app.get("/api/v1/", (req,res) => {
  res.json({healthy:true})
});

//app.post("/api/v1/urls", require(console.log("My shortURL", shortURL);));
//create web server and add text to display port

app.listen(port, function(){
  console.log('Our server is running on Port', port);
});
