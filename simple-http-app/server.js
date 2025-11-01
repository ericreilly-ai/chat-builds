const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Path to log file
const logFile = path.join(__dirname, 'payloads.log');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to receive payloads and append to log file
app.post('/', (req, res) => {
  const data = JSON.stringify(req.body);
  fs.appendFile(logFile, data + '\n', err => {
    if (err) {
      console.error('Error writing payload:', err);
      return res.status(500).send('Error storing payload');
    }
    res.send('Payload received');
  });
});

// Basic GET to confirm service is running
app.get('/', (req, res) => {
  res.send('Simple HTTP application is running');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
