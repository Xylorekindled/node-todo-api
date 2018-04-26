const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = 'abc123!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('HASH: ', hash);
        hashedPassword = hash;
    });
});

var hashedPassword = '$2a$10$mHYIGinmshFQglc9YxZAiuD/NisxTQTUjzcI03ZlDnkl.1yiV6US.';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

