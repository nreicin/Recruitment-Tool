const express = require('express');
const router = express.Router();
//const Email = require('../models/Email'); // Your Mongoose model

router.post('/', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const newEmail = new Email({ email });
        await newEmail.save();
        res.status(201).json({ message: 'Email submitted successfully' });
    } catch (error) {
        console.error('Error saving email:', error);
        res.status(500).json({ message: 'Failed to submit email' });
    }
});

module.exports = router;