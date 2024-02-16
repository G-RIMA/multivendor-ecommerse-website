const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Customer = require('../models/Customer');

// Controller methods for user management
exports.signUp = async(req, res) => {
    //validate requests
    if(!req.body){
        res.status(400).send({message: "Contents can't be empty"})
        return;
    }

    try{
        // Check if user with the same email already exists
        const existingUser = await Customer.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists. Please log in.' });
        }
        
        //create new customer
        const customer = new Customer({
            username:req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            address: req.body.address,
            phonenumber: req.body.phonenumber,
        })

        //save user to database
        const savedCustomer = await customer.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: savedCustomer._id, email: savedCustomer.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // You can adjust the expiration time as per your requirement
        );
        
        // Send the token back along with any other relevant data
        res.status(201).json({ token, customer: savedCustomer });
        
    } catch(error){
        res.status(500).send({
            message:error.message || "Some error occured"
        })
    }
}
exports.login = async(req, res) =>{
    const{ email, password } = req.body;

    try {
        // Find the user with the provided email address
        const user = await Customer.findOne({ email });

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

exports.updateCustomer = async (req, res) => {
    const customerId = req.params.id;
    const updateData = req.body;

    try {
        // Find the customer by ID and update their information
        const updatedCustomer = await Customer.findByIdAndUpdate(customerId, updateData, { new: true });

        if (!updatedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json(updatedCustomer);
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ message: 'Failed to update customer information' });
    }
};