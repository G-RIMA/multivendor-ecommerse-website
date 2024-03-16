const express = require('express');
const Customer = require('../models/customerModel');
const Auth = require('../middleware/authCustomer');

const router = new express.Router()

// sign up
router.post('/customer/signup', async( req, res) => {
    const customer = new Customer(req.body)
    try{
        await customer.save()
        const token  = await customer.generateAuthToken()
        res.status(201).send({customer, token})
    } catch(error){
        res.status(400).send(error)

    }
});

//Log in
router.post('/customer/login', async(req, res) => {
    try{
        const customer = await Customer.findByCredentials(req.body.email, req.body.password)
        const token = await customer.generateAuthToken()
        res.send({ customer, token }) 

    } catch(error){
        res.status(400).send(error)

    }
});

//Logout
router.post('/customer/logout',Auth, async(req, res) =>{
    try{
        req.customer.tokens = req.customer.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.customer.save()
        res.send()

    } catch(error){
        res.status(500).send()
    }

});

//Logout All Devices
router.post('/customer/logoutAll', Auth, async(req, res) => {
    try{
        req.customer.tokens = []
        await req.customer.save()
        res.send()

    } catch (error){
        res.status(500).send()
    }
});

module.exports = router;