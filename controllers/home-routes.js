const router = require("express").Router();
const { Article, Images, Article_Comment, User } = require("../models");

//Homepage load
router.get("/", (req, res) => {
  Article.findAll({
    attributes: ["id", "title"],
    include: [
      {
        model: Images,
        attributes: ["filename", "article_id"],
      },
    ],
  })
    .then((dbArticleData) => {
      const articles = dbArticleData.map((article) =>
        article.get({ plain: true })
      );
      res.render("homepage", { articles, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Log in Route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//trying to go to the store
router.get("/store", (req, res) => {
  res.render("store", { loggedIn: req.session.loggedIn });
});

//Get one article
router.get("/article/:id", (req, res) => {
  Article.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "article_text", "created_at"],
    include: [
      {
        model: Images,
        attributes: ["filename", "article_id"],
      },
      {
        model: Article_Comment,
        attributes: [
          "id",
          "comment_text",
          "article_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbArticleData) => {
      const article = dbArticleData.get({ plain: true });
      res.render("aticles", { article, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
