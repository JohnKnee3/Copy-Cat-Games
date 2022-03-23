const { Article_Comment } = require("../models");

const article_commentData = [
  {
    comment_text: "Yay.",
    article_id: 2,
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
  },
  {
    comment_text: "I sure hope this works.",
    article_id: 2,
    user_id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
  },
  {
    comment_text: "Yay indeed.",
    article_id: 2,
    user_id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
  },
  {
    comment_text: "I have friends.",
    article_id: 2,
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
  },
  {
    comment_text: "This is my favoritest game ever!!!!!",
    article_id: 1,
    user_id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
  },
  {
    comment_text: "Meh it could be better.  Calm down Molly",
    article_id: 1,
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
  },
  {
    comment_text:
      "I used HATE this game, but now that CCG claims they make it it's one of my top 10 favorite games of all time.",
    article_id: 3,
    user_id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
  },
  {
    comment_text:
      "I love how this game uses love to love the love.  You know what I mean love love?",
    article_id: 3,
    user_id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
  },
];

const seedArticleComments = () =>
  Article_Comment.bulkCreate(article_commentData);

module.exports = seedArticleComments;
