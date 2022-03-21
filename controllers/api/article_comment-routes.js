const router = require("express").Router();
const { Article_Comment } = require("../../models");

router.get("/", (req, res) => {
  Article_Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
