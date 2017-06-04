const express = require('express');        //load express module set's as a var
const bodyparser = require('body-parser'); //load bodyparser module set's as a var
const app = express();                     //instantiate express as var

const port = process.env.PORT || 3000; //load port 3000 as var

app.use('/api', require('../routes/urlshortener.js')(express)); //sets the base of the url

exports.server = app.listen(port, () => {              //listens to server and prints to terminal
  console.log('Our server is running on Port', port);
});


module.exports = app;
module.exports = server; //exports the server
