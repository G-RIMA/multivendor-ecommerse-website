const jwt = require('jsonwebtoken');
const Customer = require('../models/customerModel');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            throw new Error('Authentication token missing');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customer = await Customer.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!customer) {
            throw new Error('Customer not found');
        }

        req.token = token;
        req.customer = customer;
        next();
    } catch (error) {
        res.status(401).send({ error: error.message || 'Authentication failed' });
    }
};

module.exports = auth;