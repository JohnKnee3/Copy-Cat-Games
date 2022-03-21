const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedArticles = require("./articleData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedArticles();

  process.exit(0);
};

seedAll();
