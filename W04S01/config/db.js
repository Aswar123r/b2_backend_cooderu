const Pool = require('pg').Pool


const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "my_database",
    password : "12345678",
    port : "5432"
});

module.exports = pool