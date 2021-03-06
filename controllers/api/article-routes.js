const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Article, User, Article_Comment, Images } = require("../../models");

// get all articles
router.get("/", (req, res) => {
  console.log("======================");
  Article.findAll({
    attributes: ["id", "title", "created_at", "description"],
    include: [
      {
        model: Images,
        attributes: ["filename"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get one article
router.get("/:id", (req, res) => {
  Article.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "article_text_1", "article_text_2"],
    include: [
      { model: Images, attributes: ["filename"] },
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
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No article found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
