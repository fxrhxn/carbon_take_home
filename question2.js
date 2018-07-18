//Implement a RSA-based encryption and decryption scheme with two functions. Encrypt (takes in a string and returns a private key) and decrypt (takes in private key and returns original string). Provide documentation. (2/3) *

// Nodejs encryption
var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


//Encrypt text.
var testing_encrypt = encrypt("Carbon.money")

//Decrypt text.
console.log(decrypt(testing_encrypt));


/*

Documentation

encrypt(String) --> Returns an encrypted string using built in Crypto class in Node.js.

decrypt(String) --> Decrypts string.

*/
