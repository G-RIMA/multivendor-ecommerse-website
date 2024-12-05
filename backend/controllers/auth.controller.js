const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User, UserRole } = require('../models/userModel');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

const authController = {
  // Register user
  register: async (req, res) => {
    try {
      const { email, password, role, firstName, lastName, phone, companyDetails, businessOwner } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      // Create user based on role
      const userData = {
        email,
        password,
        role: role || UserRole.CUSTOMER,
        firstName,
        lastName,
        phone
      };

      // Add role-specific data
      if (role === UserRole.VENDOR && companyDetails) {
        userData.companyDetails = {
          companyName: companyDetails.companyName,
          registrationNumber: companyDetails.registrationNumber,
          kraPin: companyDetails.kraPin,
          businessAddress: companyDetails.businessAddress,
          businessEmail: companyDetails.businessEmail || email, // Default to main email
          businessPhone: companyDetails.businessPhone || phone, // Default to main phone
        };
      }

      const user = new User(userData);
      await user.save();

      // Generate token
      const token = generateToken(user);

      res.status(201).json({
        token,
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          companyDetails: user.companyDetails
        }
      });
    } catch (error) {
      console.error('Registration error details:', error);
      // Handle mongoose validation errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          error: 'Validation failed',
          details: Object.keys(error.errors).reduce((acc, key) => {
            acc[key] = error.errors[key].message;
            return acc;
          }, {})
        });
      }

      res.status(500).json({ 
        error: 'Registration failed',
        message: error.message 
      });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Check password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate token
      const token = generateToken(user);

      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          companyDetails: user.companyDetails
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  },

  // Get current user
  getCurrentUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user data' });
    }
  }
};

module.exports = authController;