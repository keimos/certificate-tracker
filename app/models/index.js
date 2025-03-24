const dbConfig = require("../config/db.config.js");
const { Sequelize } = require("sequelize");

// create an instance of Sequelize with databse config
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: false,
});

// Initialize the database object
const db = {
  Sequelize,
  sequelize,
  certificates = require("./certs.model.js")(sequelize, Sequelize),
};

module.exports = db;
