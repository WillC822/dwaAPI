//create module to house url string variable/constant that contains alphanumeric set
const express = require('express');
exports.genURL = (urlLength) => {
 var urlString = '';
 const alphaNumeric='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

//start loop
//randomly generate urlLength characters
//end loop
for(var genLoopIndex = 0; genLoopIndex <urlLength; genLoopIndex++){

  urlString += alphaNumeric.charAt(Math.random() * (alphaNumeric.length))
}
  return urlString
}
