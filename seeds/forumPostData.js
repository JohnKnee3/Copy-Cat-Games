const { Forum_Post } = require("../models");

const forumPostData = [
    {
        title: "This is the first post title",
        post_content: "Post content one",
        user_id: 1
    },
    {
        title: "This is the second post title",
        post_content: "Post content two",
        user_id: 2
    },
    {
        title: "This is the third post title",
        post_content: "Post content three",
        user_id: 3
    },
    {
        title: "This is the forth post title",
        post_content: "Post content four",
        user_id: 4
    }
];

const seedForumPosts = () => Forum_Post.bulkCreate(forumPostData);

module.exports = seedForumPosts;