const express = require('express');
const https = require('https');
const fs = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/robotikeg.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/robotikeg.com/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/robotikeg.com/chain.pem'),
};

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  https.createServer(httpsOptions, server).listen(443, (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:443');
  });
});
