const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Forum_Comment extends Model {}

Forum_Comment.init(
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "forum_comment",
  }
);

module.exports = Forum_Comment;
