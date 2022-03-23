const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedArticles = require("./articleData");
const seedArticleComments = require("./article_commentData");
const seedImagesArt = require("./imagesArtData");
const seedImagesAction = require("./imagesActionData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedArticles();

  await seedArticleComments();

  await seedImagesArt();

  await seedImagesAction();

  process.exit(0);
};

seedAll();
