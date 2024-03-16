const jwt = require('jsonwebtoken');
const Customer = require('../models/customerModel');

const auth = async(req, res, next) => {
    try{
        const token = req.header('Authorisation'). replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const customer = await Customer.findOne({_id: decoded._id, 'tokens.token':token })

        if(!customer){
            throw new Error
        }

        req.token = token;
        req.customer = customer;
    next()
    } catch (error){
        res.status(401).send({error: "Authentication required"})

    }
}
module.exports = auth;