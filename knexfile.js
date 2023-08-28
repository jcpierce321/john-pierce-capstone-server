

require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      database: process.env.DB_LOCAL_DBNAME,
      user:     process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './DB_Setup/migrations'
    },
    seeds: {
      directory: './DB_Setup/seeds'
  }
  },

 
};