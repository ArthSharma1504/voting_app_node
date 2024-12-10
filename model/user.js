// for creating an user & user info

const mongoose = require('mongoose');

// defining schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    aadharCardNumber: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['voter','admin'],
        default: 'voter'
    },
    isVoted: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;