const client = require('../db-client');
const users = require('./users');

Promise.all(
    users.map(user => {
        return client.query(`
            INSERT INTO users (name, email, phone)
            VALUES ($1, $2, $3);
        `,
        [user.name, user.email, user.phone]
        ).then(result => result.rows[0]);
    })
)
    .then(
        () => console.log('seed data load successful'),
        err => console.log(err)
    )
    .then(() => client.end());