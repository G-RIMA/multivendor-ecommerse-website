const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: Number,
        required: true,
        unique: true
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
