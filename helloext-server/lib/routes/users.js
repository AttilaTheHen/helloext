const app = require('../app');
const client = require('../../db-client');

app.get('/api/users', (req, res, next) => {
    client.query(`
        SELECT * FROM users;
    `)
        .then(result => {
            res.sendStatus(result.rows);
        })
        .catch(next);
});