const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 50
};

var token = jwt.sign(data, 'abc123');
console.log('Token: ', token);

var decoded = jwt.verify(token, 'abc123');
console.log('decoded: ', decoded);