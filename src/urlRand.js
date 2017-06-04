exports.genURL = (urlLength) => {
  var urlString = '';
  const sourceLetters= "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

 //Loop start
  //Randomly Gen urlLength Characters
 //Loop end
 for(var genLoopIndex = 0; genLoopIndex < urlLength; genLoopIndex++){

   urlString += sourceLetters.charAt(Math.random() * (sourceLetters.length))

 }

  return urlString
};

module.exports = urlString;
