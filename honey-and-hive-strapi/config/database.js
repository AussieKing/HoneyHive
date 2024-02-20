const path = require('path');

module.exports = ({ env }) => {
  // If the environment is development, use SQLite
  if (env('NODE_ENV') === 'development') {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', '.tmp', 'data.db'),
        },
        useNullAsDefault: true,
      },
    };
  }

  // For production (and other environments), use PostgreSQL
  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: env.bool('DATABASE_SSL', false)
          ? { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false) }
          : false,
      },
      debug: false,
    },
  };
};
