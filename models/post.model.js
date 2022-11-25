const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoincrement: true,
      primaryKey: true,
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    blogContent: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "Post" }
);

module.exports = Post;
