const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "Molly",
    email: "moobear@yahoo.com",
    password: "123456",
  },
  {
    username: "Mira",
    email: "mirpups@yahoo.com",
    password: "123456",
  },
  {
    username: "Vio",
    email: "lovelove@yahoo.com",
    password: "123456",
  },
  {
    username: "chai",
    email: "chai@yahoo.com",
    password: "123456",
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
