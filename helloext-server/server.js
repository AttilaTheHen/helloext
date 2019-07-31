require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');

const http = require('http');

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res) => {
    res.sendFile('index.html', { root: '../helloext-app/' });
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
    // eslint-disable-next-line
    console.log('server running on', server.address().port);
});