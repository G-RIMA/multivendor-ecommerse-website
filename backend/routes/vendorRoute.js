const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', vendorController.register);
router.post('/login', vendorController.login);
router.get('/verify/:id', vendorController.verifyEmail);

// Protected routes
router.post('/logout', auth, vendorController.logout);
router.get('/profile', auth, vendorController.getProfile);
router.patch('/profile', auth, vendorController.updateProfile);
router.delete('/account', auth, vendorController.deleteAccount);

module.exports = router;