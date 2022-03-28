const { Forum_Comment } = require("../models");

const forumCommentData = [
  {
    comment_text:
      "You do not get bonuses for diagnols ever making your point moot.  Next time just actually read the rules Molly.",
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
    post_id: 1,
    createdAt: "2022-03-26T15:06:55.000Z",
  },
  {
    comment_text: "damn love love, damn",
    user_id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
    post_id: 1,
    createdAt: "2022-03-27T15:06:55.000Z",
  },
  {
    comment_text: "King of Tokyo",
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
    post_id: 2,
    createdAt: "2022-03-26T15:06:55.000Z",
  },
  {
    comment_text: "Unicorn Glitterluck",
    user_id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
    post_id: 2,
    createdAt: "2022-03-26T15:06:55.000Z",
  },
  {
    comment_text: "Dead Reckoning",
    user_id: "e8b59396-5f08-4242-afc8-b9a3b0f4964d",
    post_id: 2,
    createdAt: "2022-03-27T15:06:55.000Z",
  },
  {
    comment_text: "What is she even talking about?",
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
    post_id: 3,
    createdAt: "2022-03-28T15:06:55.000Z",
  },
  {
    comment_text:
      "The ability to eliminate a player’s alien power is a very notable mechanic for players to be able to down a large threat. Most aliens are designed with the intent that you can lose them, and means that players must conserve their resources in order to keep playing with their alien powers.",
    user_id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
    post_id: 4,
    createdAt: "2022-03-28T15:06:55.000Z",
  },
];

const seedForumComments = () => Forum_Comment.bulkCreate(forumCommentData);

module.exports = seedForumComments;
