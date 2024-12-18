var knex = require ('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'dccsharp',
        database: 'LianYu',
        port: 5432,
    }
});

module.exports = knex;