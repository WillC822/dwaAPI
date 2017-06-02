//load express module
var express = require('express')

//instantiate express as var
var app = express();

//load port 3000 as var
var port = 3000;

//create route
app.get("/", (req,res) => {
  res.json({healthy:true})
});

//app.post("api/v1/urls", ())
//create web server and add text to display port
app.listen(port, function(){
  console.log('Our server is running on Port', port);
});
