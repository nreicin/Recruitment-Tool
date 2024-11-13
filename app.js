// Load environment variables from .env file
require('dotenv').config();



// Import necessary packages
const express = require('express');
const { connectDB } = require('./config/db'); // Import the SQLite connection function
// const authRoutes = require('./routes/auth'); 
const subscribeRoute = require('./routes/subscribe');
const path = require('path');

// Create an Express app
const app = express();

const cors = require('cors');
app.use(cors());


// Middleware for parsing JSON
app.use(express.json());

// Connect to SQLite
connectDB(); // Call the function to connect to SQLite

connectDB().catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit the app in case of a database connection failure
});



// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use routes
// app.use('/api/auth', authRoutes);
app.use('/api/subscribe', subscribeRoute);

// Use process.env.PORT or a default port if not specified
const PORT = process.env.PORT || 3001;


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



