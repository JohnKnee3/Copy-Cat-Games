// import all models
const User = require("./User");
const Article_Post = require("./Article_Post");
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

Article_Comment.belongsTo(Article_Post, {
  foreignKey: "article_post_id",
  onDelete: "SET NULL",
});

User.hasMany(Article_Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Article_Post.hasMany(Article_Comment, {
  foreignKey: "article_post_id",
});

module.exports = { User, Article_Post, Article_Comment };
