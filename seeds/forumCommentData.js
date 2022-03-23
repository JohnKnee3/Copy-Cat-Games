const { Forum_Comment } = require("../models");

const forumCommentData = [
    {
        comment_text: "Comment text one",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Comemnt text two",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Comment text three",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Comment text four",
        user_id: 4,
        post_id: 4
    }
];

const seedForumComments = () => Forum_Comment.bulkCreate(forumCommentData);

module.exports = seedForumComments;