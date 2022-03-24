const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Post model
class Forum_Post extends Model {}

// Post model columns
Forum_Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'user',
    //         key: 'id'
    //     }
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "forum_post",
  }
);

module.exports = Forum_Post;
