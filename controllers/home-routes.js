const router = require("express").Router();
const { Article, Images, Article_Comment, User } = require("../models");

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
      res.render("homepage", { articles });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/:id", (req, res) => {
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
      res.render("articles", { article });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
