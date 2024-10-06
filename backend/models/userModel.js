const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define possible roles as an object instead of enum
const UserRole = {
  ADMIN: 'admin',
  VENDOR: 'vendor',
  CUSTOMER: 'customer'
};

// Define base user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(UserRole),
    required: true,
  },
  // Common fields for all users
  firstName: String,
  lastName: String,
  phone: String,
  
  // Vendor-specific fields
  companyDetails: {
    companyName: String,
    registrationNumber: String,
    kraPin: String,
    businessAddress: String,
    businessEmail: String,
    businessPhone: String,
  },
  
  // Customer-specific fields
  shippingAddresses: [{
    street: String,
    city: String,
    state: String,
    zipCode: String,
  }],
  
  // Admin-specific fields
  adminLevel: {
    type: Number,
    default: 1,
  },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

// Export both the model and the roles
module.exports = {
  User,
  UserRole
};