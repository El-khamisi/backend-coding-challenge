const express = require('express');
const routes = require('./routes');





/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config()

// Create the Express application
const app = express();

/**
 * To serve static files a built-in middleware function in Express for simplicity
 */
app.use(express.static('view'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(routes);


/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:8000
app.listen(8000);