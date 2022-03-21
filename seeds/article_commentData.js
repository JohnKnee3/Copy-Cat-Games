const { Article_Comment } = require("../models");

const article_commentData = [
  {
    comment_text: "Yay.",
    article_id: 2,
    user_id: 2,
  },
  {
    comment_text: "I sure hope this works.",
    article_id: 2,
    user_id: 1,
  },
  {
    comment_text: "Yay indeed.",
    article_id: 2,
    user_id: 3,
  },
  {
    comment_text: "I have friends.",
    article_id: 2,
    user_id: 2,
  },
];

const seedArticleComments = () =>
  Article_Comment.bulkCreate(article_commentData);

module.exports = seedArticleComments;
