const { Forum_Post } = require("../models");

const forumPostData = [
  {
    title: "This is the first post title",
    post_content: "Post content one",
    user_id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
  },
  {
    title: "This is the second post title",
    post_content: "Post content two",
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
  },
  {
    title: "This is the third post title",
    post_content: "Post content three",
    user_id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
  },
  {
    title: "This is the forth post title",
    post_content: "Post content four",
    user_id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
  },
];

const seedForumPosts = () => Forum_Post.bulkCreate(forumPostData);

module.exports = seedForumPosts;
