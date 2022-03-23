const router = require("express").Router();
const { Article, ImagesArt } = require("../models");

router.get("/", (req, res) => {
  Article.findAll({
    attributes: ["id", "title", "article_text"],
    include: [
      {
        model: ImagesArt,
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

module.exports = router;
