/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client({
    user: 'laynemcintosh12',
    host: 'localhost',
    database: DB_URI,
    password: 'password', 
    port: 5432, 
});

client.connect();

module.exports = client;