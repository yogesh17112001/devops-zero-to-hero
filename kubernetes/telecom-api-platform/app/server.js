// Import the Express framework
// Express helps us create web servers and REST APIs easily
const express = require('express');

// Create an Express application object
// All routes (APIs) will be defined using this object
const app = express();

// Define the port number on which the application will run
// Our API will be accessible on port 3000
const PORT = 3000;

// ---------------------- HOME API ----------------------

// Create a GET API for "/"
// When someone visits http://localhost:3000/
// this function will execute
app.get('/', (req, res) => {

    // Send a simple text response to the client
    res.send('Welcome to Telecom Recharge API');

});

// ---------------------- HEALTH API ----------------------

// Health endpoint
// Kubernetes will later use this endpoint for Health Checks
app.get('/health', (req, res) => {

    // Return JSON response
    res.json({

        // Status of the application
        status: "UP"

    });

});

// ---------------------- VERSION API ----------------------

// API to check application version
// Useful after deployments to verify which version is running
app.get('/version', (req, res) => {

    res.json({

        version: "1.0.0"

    });

});

// ---------------------- RECHARGE API ----------------------

// Telecom Recharge API
// Simulates a successful mobile recharge
app.get('/recharge', (req, res) => {

    res.json({

        // Recharge Status
        status: "SUCCESS",

        // Message returned to the customer
        message: "Recharge Successful",

        // Recharge Amount
        amount: 100,

        // Telecom Operator Name
        operator: "StarTel"

    });

});

// ---------------------- START SERVER ----------------------

// Start the web server
// Listen on port 3000
app.listen(PORT, () => {

    // Print this message in terminal after server starts
    console.log(`Server running on port ${PORT}`);

});