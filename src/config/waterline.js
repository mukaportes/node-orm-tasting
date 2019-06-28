const postgreAdapter = require('sails-postgresql');

module.exports = {
  adapters: {
    postgre: postgreAdapter
  },
  postgreDev: {
    adapter: 'postgre',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
}