require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('../helloext-app'));
app.use(cors());
app.use(express.json());

const client = require('./db-client');

app.use((req, res) => {
    res.sendFile('index.html', { root: '../helloext-app/' });
});

// eslint-disable-next-line
app.listen(PORT, () => console.log('server running...'));