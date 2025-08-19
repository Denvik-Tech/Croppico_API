require('dotenv').config();
module.exports = {
    host: process.env.POSTGRESQL_HOST,
    user: process.env.POSTGRESQL_UNAME,
    password: process.env.POSTGRESQL_UPASS,
    database: process.env.POSTGRESQL_DB_NAME,
    port:5432,
    dialect: "postgres",
    ssl:false,
    max:2
  };