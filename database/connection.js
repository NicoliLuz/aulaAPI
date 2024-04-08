var knex = require('knex') ({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user:'root',
        password:'root',
        batabase:'aulaAPI',
        charset:'utf8',
        port: 3306
    }
})

module.exports = knex