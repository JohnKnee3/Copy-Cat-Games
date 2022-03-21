// import all models
const User = require("./User");
const Article = require("./Article");
const Article_Comment = require("./Article_Comment");

// create associations
// User.hasMany(Post, {
//   foreignKey: "user_id",
// });

// Post.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

Article_Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Article_Comment.belongsTo(Article, {
  foreignKey: "article_id",
  onDelete: "SET NULL",
});

User.hasMany(Article_Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Article.hasMany(Article_Comment, {
  foreignKey: "article_id",
});

module.exports = { User, Article, Article_Comment };
