const router = require('express').Router();
const client = require('../../db-client');

module.exports = router
    .get('/', (req, res, next) => {
        client.query(`
            SELECT * FROM users;
        `)
            .then(result => {
                res.send(result.rows);
            })
            .catch(next);
    })

    .post('/', (req, res, next) => {
        const body = req.body;

        client.query(`
            INSERT INTO users (name, email, phone)
            values ($1, $2, $3)
            returning *;
        `,
        [body.name, body.email, body.phone]
        )
            .then(result => {
                res.send(result.rows[0]);
            })
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        client.query(`
            SELECT id, name, email
            FROM users
            WHERE users.id = $1;
        `,
        [req.params.id])
            .then(result => {
                res.send(result.rows[0]);
            })
            .catch(next);
    });