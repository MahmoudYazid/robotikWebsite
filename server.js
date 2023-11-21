const express = require('express');
const next = require('next');
const fs = require('fs');
const https = require('https');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/robotikeg.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/robotikeg.com/fullchain.pem'),
};

app.prepare().then(() => {
    const server = express();

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    https.createServer(httpsOptions, server).listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on https://localhost:3000');
    });
});
