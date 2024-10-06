const express = require('express');
const jwt = require('jsonwebtoken');
const { User, UserRole } = require('../models/userModel');

const router = express.Router();

// Registration endpoint
router.post('/register/:userType', async (req, res) => {
  try {
    const { userType } = req.params;
    const userData = req.body;
    
    let role;
    switch (userType) {
      case 'vendor':
        role = UserRole.VENDOR;
        // Vendor-specific validation
        if (!userData.companyDetails || !userData.companyDetails.companyName) {
          return res.status(400).json({ error: 'Missing vendor details' });
        }
        break;
      case 'customer':
        role = UserRole.CUSTOMER;
        // Customer-specific validation
        if (!userData.firstName || !userData.lastName) {
          return res.status(400).json({ error: 'Missing customer details' });
        }
        break;
      case 'admin':
        role = UserRole.ADMIN;
        // Admin-specific validation
        if (!userData.adminCode) {
          return res.status(400).json({ error: 'Invalid admin registration' });
        }
        break;
      default:
        return res.status(400).json({ error: 'Invalid user type' });
    }

    const user = new User({
      ...userData,
      role,
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({ token, role: user.role });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token, role: user.role });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});

module.exports = router;