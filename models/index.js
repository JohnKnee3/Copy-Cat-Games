// import all models
const User = require("./User");
const Article = require("./Article");
const Article_Comment = require("./Article_Comment");
const Images = require("./Images");
const Forum_Comment = require("./Forum-Comment")
const Forum_Post = require("./Forum-Post")

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

Article.hasMany(Images, {
  foreignKey: "article_id",
});

Images.belongsTo(Article, {
  foreignKey: "article_id",
});

User.hasMany(Article_Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Article.hasMany(Article_Comment, {
  foreignKey: "article_id",
});


// start of forum connections:

User.hasMany(Forum_Post, {
  foreignKey: 'user_id'
});

Forum_Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Forum_Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Forum_Comment.belongsTo(Forum_Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Forum_Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Forum_Post.hasMany(Forum_Comment, {
  foreignKey: 'post_id'
});


module.exports = { User, Article, Article_Comment, Images, Forum_Comment, Forum_Post };
