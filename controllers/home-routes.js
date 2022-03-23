const router = require("express").Router();
const { Article, Images } = require("../models");

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

module.exports = router;
