// db.js

const { Sequelize } = require('sequelize');

// Create a connection to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'  // SQLite database stored in a file
});

// Test connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('SQLite Database connected!');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

module.exports = { sequelize, connectDB };
