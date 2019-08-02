const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(express.static('../helloext-app'));
app.use(cors());
app.use(express.json());

app.use((req, res) => {
    res.sendFile('index.html', { root: '../helloext-app' });
});

module.exports = app;