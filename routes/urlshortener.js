module.exports = (express) => {
//create module to house url string variable/constant that contains alphanumeric set
var router = express.Router();
var path = require("path");

  router.post('/v1/url', (req,res) => {
    var urlString = '';
    const alphaNumeric='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

   //start loop
   //randomly generate urlLength characters
   //end loop
   for(var genLoopIndex = 0; genLoopIndex <urlLength; genLoopIndex++){

     urlString += alphaNumeric.charAt(Math.random() * (alphaNumeric.length))
   }
     return urlString
     res.json({urlString});
  });


  router.get('v1/url', (req,res) =>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
  });

return router;
};
