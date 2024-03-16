const jwt = require('jsonwebtoken');
const Vendor = require('../models/vendorModel');

const auth = async(req, res, next) => {
    try{
        const token = req.header('Authorisation'). replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const vendor = await Vendor.findOne({_id: decoded._id, 'tokens.token':token })

        if(!vendor){
            throw new Error
        }

        req.token = token;
        req.vendor = vendor;
    next()
    } catch (error){
        res.status(401).send({error: "Authentication required"})

    }
}
module.exports = auth;