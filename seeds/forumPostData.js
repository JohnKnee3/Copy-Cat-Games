const { Forum_Post } = require("../models");

const forumPostData = [
  {
    title: "Long Shot Starting Card Questions",
    post_content:
      "So on one of the starting cards it has X’s on a full diagonal line. Does this mean that player immediately takes a concession bonus or are they now short one bonus action because of this…. Maybe a misprint?",
    user_id: "7c4f66a1-796a-41d1-b01d-7a1a3afaf67d",
    createdAt: "2022-03-26T15:06:55.000Z",
  },
  {
    title: "Best Gaming Company Ever",
    post_content:
      "I absolutely love taking credit for things I don't do.  This company really gets me.  Can't wait to see what future games they are going to steal next.  Predictions?",
    user_id: "b7adb27d-00bf-427a-887b-e5c1ff335c57",
    createdAt: "2022-03-26T15:06:55.000Z",
  },
  {
    title: "A Love Love's guide to TI",
    post_content:
      "First love love one nieghbor.  Then you only love with love to your other neighbor.  Afterwards you get your love on everyone elses love and put that love in the love to see what loves.",
    user_id: "374fcfd7-3632-4d01-9693-47d82bc0cd87",
    createdAt: "2022-03-27T15:06:55.000Z",
  },
  {
    title: "Cosmic Encounter Losing Alien Power Rule Necessary?",
    post_content:
      "Basically every time I have taught this game I have forgot to teach the rule “if you lose 3 home colonies you lose your alien power. Is this rule needed? Any thoughts?",
    user_id: "e8b59396-5f08-4242-afc8-b9a3b0f4964d",
    createdAt: "2022-03-28T15:06:55.000Z",
  },
  {
    title: "Let's make Isle of Cats happen!!!!",
    post_content:
      "Like most of us here I ONLY like games that CCG claims to make.  There is the new game called  Isle of Cats that most of my friends on the Feline Facebook group won't stop purring about.  Let's make some noise on these forums so we can get CCG to add this game to their collection so I can finally start liking it as well!!!",
    user_id: "0a8a6e32-7467-4618-8013-75da5c3361fc",
    createdAt: "2022-03-29T15:06:55.000Z",
  },
];

const seedForumPosts = () => Forum_Post.bulkCreate(forumPostData);

module.exports = seedForumPosts;
