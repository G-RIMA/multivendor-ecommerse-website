const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { verifyToken, checkRole } = require('../middleware/auth');

// Auth routes
router.post('/auth/register/:role', authController.register);
router.post('/auth/login', authController.login);
router.get('/auth/me', verifyToken, authController.getCurrentUser);

module.exports = router;