const fs = require('fs');
const express = require('express');
const https = require('https');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

const privateKey = fs.readFileSync('./../../localhost-root-ca-key.pem', 'utf8');
const certificate = fs.readFileSync('./../../localhost.crt', 'utf8');

const credentials = { key: privateKey, cert: certificate };

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, Secure World!' });
});

https.createServer(credentials, app).listen(3000, () => {
  console.log('Server started on https://localhost:3000');
});
