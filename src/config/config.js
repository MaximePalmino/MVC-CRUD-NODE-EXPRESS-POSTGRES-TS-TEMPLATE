const Pool = require('pg').Pool;


// CONNECT DB
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'postgres',
    port: '5432'
})

module.exports = pool