const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        email VARCHAR(256) NOT NULL,
        phone VARCHAR(256) NOT NULL
    );
`)
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });