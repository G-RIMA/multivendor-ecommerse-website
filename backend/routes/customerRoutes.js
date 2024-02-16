const express = require('express');
const router = express.Router();
const axios = require('axios');
const customerController = require('../controllers/customerController');

//route to create a new user
router.post('/signup', customerController.signUp);

//log in
router.post('/login', customerController.login);

//update
router.put('/:id', customerController.updateCustomer);

module.exports = router;
