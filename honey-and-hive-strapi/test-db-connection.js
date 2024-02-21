const parse = require('pg-connection-string').parse;
// Replace the string below with your actual DATABASE_URL value
const connectionString = 'postgres://freddydordoni:%40shley7B3@localhost:5432/strapi';
const config = parse(connectionString);

console.log(config);
