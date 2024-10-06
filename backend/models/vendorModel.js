const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const vendorSchema = new mongoose.Schema({
    // Company Details
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    kraPin: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    businessAddress: {
        type: String,
        required: true,
        trim: true
    },
    businessAddress2: {
        type: String,
        required: true,
        trim: true
    },
    businessEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Business email is invalid');
            }
        }
    },
    businessPhone: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Business phone number is invalid');
            }
        }
    },
    
    // Business Owner Details
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    personalEmail: {
        type: String,
        lowercase: true,
        validate(value) {
            if (value && !validator.isEmail(value)) {
                throw new Error('Personal email is invalid');
            }
        }
    },
    idNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    personalPhone: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Personal phone number is invalid');
            }
        }
    },

    // Authentication
    password: {
        type: String,
        required: true,
        minlength: 8,
        unique: true,
        validate(value) {
            if(
                value.toLowerCase().includes('password')){
                    throw new Error('password cant contain the word password')
                }
            elif(
                !validator.isAlphanumeric( value ))
                {
                throw new Error('Password must contain numbers and letters')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;