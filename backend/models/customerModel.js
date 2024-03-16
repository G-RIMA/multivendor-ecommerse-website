const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
          validate( value ){
            if(
                !validator.isEmail( value ))
                {
                    throw new Error('Email is invalid')
                }
          }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate( value ){
            if(
                value.toLowerCase().includes('password')){
                    throw new Error('password cant contain the word password')
                }
            elif(
                !validator.isAlphanumeric( value ))
                {
                throw new Error('Password must contain numbers and letters')
            }
        },
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
},
{
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
