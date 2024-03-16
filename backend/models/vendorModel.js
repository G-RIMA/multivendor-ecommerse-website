const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const vendorSchema = new mongoose.Schema({
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
            else if(
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

//Generate authentication tokem
vendorSchema.methods.generateAuthToken = async function(){
    const vendor = this
      const token = jwt.sign({
        _id: vendor._id.toString()
      }, process.env.JWT_SECRET)
      vendor.tokens = user.tokens.concat({token})
      await vendor.save()

      return token
}

//login users
vendorSchema.statics.findByCredentials = async(email, password) => {
    const vendor = await Vendor.findOne({ email })
    if(!vendor) {
        throw new error('Cant Log In')
    }
    const isMatch = await bcrypt.compare(password, vendor.password)
    if(!isMatch) {
        throw new Error("Cant Log In")
    }
    return vendor
}

//hash plain password
vendorSchema.pre('save', async function(next){
    const vendor= this
    if(vendor.isModified('password')){
        vendor.password = await bcrypt.hash(vendor.password, 8)
    }
    next()
})


const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;