const Vendor = require('../models/vendorModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//const { sendWelcomeEmail, sendVerificationEmail } = require('../emails/account');

exports.register = async (req, res) => {
    //validate requests
    if(!req.body){
        res.status(400).send({message: "Contents can't be empty"})
        return;
    }

    try{
        // Check if user with the same email already exists
        const existingUser = await Vendor.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists. Please log in.' });
        }
        
        //create new customer
        const vendor = new Vendor({
            companyName: req.body.companyName,
            registrationNumber: req.body.registrationNumber,
            kraPin: req.body.kraPin,
            businessAddress: req.body.businessAddress,
            businessAddress2: req.body.businessAddress2,
            businessEmail: req.body.businessEmail,
            businessPhone: req.body.businessPhone,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            idNumber: req.body.idNumber,
            email: req.body.personalEmail,
            dateOfBirth: req.body.dateOfBirth,
            personalPhone: req.body.personalPhone,
            password: await bcrypt.hash(req.body.password, 10),
            address: req.body.address,
            phonenumber: req.body.phonenumber,
        })

        //save user to database
        const savedVendor = await vendor.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: savedVendor._id, email: savedVendor.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // You can adjust the expiration time as per your requirement
        );
        
        // Send the token back along with any other relevant data
        res.status(201).json({ token, vendor: savedVendor });
        
    } catch(error){
        res.status(500).send({
            message:error.message || "Some error occured"
        })
    }
};

exports.login = async (req, res) => {
    const{ email, password } = req.body;

    try {
        // Find the user with the provided email address
        const user = await Vendor.findOne({ email });

        if(!user){
            return res.status(401).json({ message: 'Invalid email '})
        }

        //compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return res.status(401).json({message: 'Invalid password'});

        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Adjust the expiration time as per your requirement
        );

        // Send the token back along with any other relevant data
        res.status(200).json({ token, user });
    } catch(error){
        console.error('Login failed:', error);
        res.status(500).json({ message: 'Login failed. Please try again later.' });
    }
};

exports.logout = async (req, res) => {
    try {
        req.vendor.tokens = req.vendor.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.vendor.save();
        res.send({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).send({
            message: 'Logout failed',
            error: error.message
        });
    }
};

exports.getProfile = async (req, res) => {
    res.send(req.vendor);
};

exports.updateProfile = async (req, res) => {
    const vendorId = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        'companyName', 'businessAddress', 'businessPhone', 
        'personalPhone', 'personalAddress', 'bankDetails'
    ];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }
    
    try {
        updates.forEach((update) => req.vendor[update] = req.body[update]);
        await req.vendor.save();
        res.send(req.vendor);
    } catch (error) {
        res.status(400).send({
            message: 'Update failed',
            error: error.message
        });
    }
};

exports.verifyEmail = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) {
            return res.status(404).send({ error: 'Vendor not found' });
        }
        
        vendor.isVerified = true;
        await vendor.save();
        res.send({ message: 'Email verified successfully' });
    } catch (error) {
        res.status(400).send({
            message: 'Verification failed',
            error: error.message
        });
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        await req.vendor.remove();
        res.send({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).send({
            message: 'Delete failed',
            error: error.message
        });
    }
};