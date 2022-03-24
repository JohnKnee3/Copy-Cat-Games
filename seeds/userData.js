const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
    username: "Molly",
    email: "moobear@yahoo.com",
    password: "123456",
  },
  {
    id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
    username: "Mira",
    email: "mirpups@yahoo.com",
    password: "123456",
  },
  {
    id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
    username: "Vio",
    email: "lovelove@yahoo.com",
    password: "123456",
  },
  {
    id: "e8b59396-5f08-4242-afc8-b9a3b0f4964d",
    username: "Chai",
    email: "chai@yahoo.com",
    password: "123456",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
