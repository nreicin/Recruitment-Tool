// controllers/authController.js

const User = require('../models/email');

const register = async (req, res) => {
    const { email, password } = req.body;
    // Handle registration logic...
};

module.exports = { register };  // Make sure you're exporting the function

