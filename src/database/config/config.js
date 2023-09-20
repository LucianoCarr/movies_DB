require('dotenv').config();

module.exports = {
  development: {  //base de datos local
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_DATABASE_DEV,
    host: process.env.DB_HOST_DEV,
    port: process.env.DB_PORT_DEV,
    dialect: "mysql",
  },
  test: { //base de datos de testeo
    username: "root",
    password: "root",
    database: "database_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  production: { //la base de datos de produccion (definitiva)
    username: "root",
    password: "root",
    database: "database_production",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
};
