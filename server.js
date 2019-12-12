const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

/*  Example for simple express route
 *
 * app.get('/', (req, res) => {
 *  res.send('Hello from express'); // This sends a simple text message or HTML
 *  res.json sends JSON and can also do res.sendStatus
 *
 *  // good way is to manually chain repsonse and status
 *  res.status(200).json({ success: true, data: { id: 1 }});
 * });
 */

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Set Port number and listen
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);

  // close server and exit process if error
  server.close(() => process.exit(1));
});
