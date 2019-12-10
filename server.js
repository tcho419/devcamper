const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

/*
app.get('/', (req, res) => {
  //res.send('Hello from express'); // This sends a simple text message or HTML
  // res.json sends JSON and can also do res.sendStatus

  // good way is to manually chain repsonse and status
  res.status(200).json({ success: true, data: { id: 1 }});
});
*/

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Set Port number and listen
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
