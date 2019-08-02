const router = require('express').Router();
const client = require('../../db-client');

module.exports = router.get('/', (req, res, next) => {
    client.query(`
        SELECT * FROM users;
    `)
        .then(result => {
            res.send(result.rows);
        })
        .catch(next);
});