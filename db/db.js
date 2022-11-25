const { Sequelize } = require("sequelize");

const path = require("path");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "Blog_Details.sqlite"),
});

module.exports = db;
