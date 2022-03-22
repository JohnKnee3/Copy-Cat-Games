const router = require("express").Router();
const sequelize = require("../config/connection");
const { Article, Images } = require("../models");

router.get("/", (req, res) => {
  Article.findAll({
    attributes: ["title", "article_text"],
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

module.exports = router;
