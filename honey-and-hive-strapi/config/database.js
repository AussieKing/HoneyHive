// path: ./config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'freddydordoni'),
      password: env('DATABASE_PASSWORD', '@shley7B3'), // Replace with your actual password
      // ssl: {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // Set to false if SSL is not used
      // },
    },
    debug: false,
  },
});

