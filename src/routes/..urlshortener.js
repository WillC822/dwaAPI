module.exports = (express) => {
//create module to house url string variable/constant that contains alphanumeric set
const tool = require('..src/tool.js');
var router = express.Router();
var path = require("path");
var shortURL = tool.genURL(5)


  router.post('/v1/url', (req,res) => {         //set route/endpoint for alpha generator
    var urlString = '';
    const alphaNumeric='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

   //start loop
   //randomly generate urlLength characters
   //end loop
   for(var genLoopIndex = 0; genLoopIndex <urlLength; genLoopIndex

     urlString += alphaNumeric.charAt(Math.random() * (alphaNumeric.length))
   }
     return urlString
  }
     res.json({'http://'+ shortURL});  // Prints alpha generator to console in json format
  });


  router.get('v1/url', (req,res) => {          //Set route to show home page
    res.sendFile(path.join(__dirname+'/views/index.html'));
  });

return router;
};
