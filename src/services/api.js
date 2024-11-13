import axios from 'axios';

// Create an instance of axios with the backend URL
const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001/api',  // Adjust the backend URL here
});

// Function to send email to the backend for subscription
export const subscribeEmail = (email) => {
    return api.post('/subscribe', { email })
        .then(response => {
            return response.data;  // Handle success response
        })
        .catch(error => {
            console.error('There was an error subscribing:', error);
            throw error;  // Handle and throw error for further processing
        });
};
