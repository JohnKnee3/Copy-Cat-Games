const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedArticles = require("./articleData");
const seedArticleComments = require("./article_commentData");
const seedImages = require("./imagesData");
const seedForumPosts = require("./forumPostData");
const seedForumComments = require("./forumCommentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log('--------------');

  await seedArticles();
  console.log('--------------');

  await seedArticleComments();
  console.log('--------------');

  await seedImages();
  console.log('--------------');

  await seedForumPosts();
  console.log('--------------');

  await seedForumComments();
  console.log('--------------');

  console.log("copy_cat_games_db SEEDED!");

  process.exit(0);
};
seedAll();
