const { Forum_Comment } = require("../models");

const forumCommentData = [
  {
    comment_text: "Comment text one",
    user_id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
    post_id: 1,
  },
  {
    comment_text: "Comemnt text two",
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
    post_id: 2,
  },
  {
    comment_text: "Comment text three",
    user_id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
    post_id: 3,
  },
  {
    comment_text: "Comment text four",
    user_id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
    post_id: 4,
  },
];

const seedForumComments = () => Forum_Comment.bulkCreate(forumCommentData);

module.exports = seedForumComments;
