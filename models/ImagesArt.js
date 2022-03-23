const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ImagesArt extends Model {}

ImagesArt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "imagesart",
  }
);

module.exports = ImagesArt;
