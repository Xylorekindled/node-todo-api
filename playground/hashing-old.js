const { SHA256 } = require('crypto-js');

var msg = '';
var hash = SHA256(msg).toString();

console.log(`Message: ${msg}`);
console.log(`Hashed Message: ${hash}`);

var data = {
    id: 2
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

token.data.id = 6;
token.hash = SHA256(JSON.stringify(token.data)).toString();
console.log('Changed Hash', token.hash);

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
console.log('Result Hash', resultHash);

if(resultHash === token.hash)
{
    console.log('Data was not changed');
}
else
{
    console.log('Data was changed, cannot be trusted');
}

var data = {
    id: 50
};

var token = jwt.sign(data, 'abc123');
console.log('Token: ', token);

var decoded = jwt.verify(token, 'abc123');
console.log('decoded: ', decoded);