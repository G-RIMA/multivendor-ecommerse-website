const express = require('express');
const Vendor = require('../models/vendorModel');
const Auth = require('../middleware/authVendor');

const router = new express.Router()

// sign up
router.post('/vendor/signup', async( req, res) => {
    const vendor = new Vendor(req.body)
    try{
        await vendor.save()
        const token  = await vendor.generateAuthToken()
        res.status(201).send({vendor, token})
    } catch(error){
        res.status(400).send(error)

    }
});

//Log in
router.post('/vendor/login', async(req, res) => {
    try{
        const vendor = await Vendor.findByCredentials(req.body.email, req.body.password)
        const token = await vendor.generateAuthToken()
        res.send({ vendor, token }) 

    } catch(error){
        res.status(400).send(error)

    }
});

//Logout
router.post('/vendor/logout',Auth, async(req, res) =>{
    try{
        req.vendor.tokens = req.vendor.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.vendor.save()
        res.send()

    } catch(error){
        res.status(500).send()
    }

});

//Logout All Devices
router.post('/vendor/logoutAll', Auth, async(req, res) => {
    try{
        req.vendor.tokens = []
        await req.vendor.save()
        res.send()

    } catch (error){
        res.status(500).send()
    }
});

module.exports = router;