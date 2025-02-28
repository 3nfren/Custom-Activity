// Middleware utility for verifying and decoding the jwt sent from Salesforce Marketing Cloud, with error handler
const verifyJwt = require('../lib/jwtDecoder');
require('dotenv').config();
var jwtSecret = process.env.JWT_SECRET ? process.env.JWT_SECRET : ""

let bodyDecoder = function (req, res, next) {
    
  verifyJwt(req.body, jwtSecret, (err, decoded) => {
    // verification error -> unauthorized request
    
    if (err) {
      console.error(err);
      return res.status(401).end();
    }
    // // check if there are valid inArguments to begin activity
    // if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
    //   req.body = decoded
    //   next()
    // } else { // in case inArguments is invalid
    //   console.error('inArguments invalid.');
    //   return res.status(400).end();
    // }
    // check if there are valid inArguments to begin activity
    else { // in case inArguments is invalid
      req.body = decoded
      next()
    }


  })
}


module.exports = bodyDecoder;