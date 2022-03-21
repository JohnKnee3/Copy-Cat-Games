const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Article_Comment extends Model {}

Article_Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    article_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "article",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "article_comment",
  }
);

module.exports = Article_Comment;
