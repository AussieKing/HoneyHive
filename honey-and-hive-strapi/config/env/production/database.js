module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'freddydordoni'),
      password: env('DATABASE_PASSWORD', '@shley7B3'),
      // ssl: env.bool('DATABASE_SSL', false) ? {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      // } : false,
    },
    debug: false,
  },
});