var mongoose = require('mongoose');

var User = mongoose.model('User', {
    emai:
    {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = { User };