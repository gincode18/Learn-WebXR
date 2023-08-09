const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, app);

// Serve static files from the root directory
app.use(express.static(__dirname));

const PORT = 8443;

server.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
