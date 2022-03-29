const router = require("express").Router();
const { Article_Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const withAdmin = require("../../utils/admin");

//Get All Comments
router.get("/", (req, res) => {
  Article_Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create a Comment while logged in as a User
router.post("/", withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Article_Comment.create({
      comment_text: req.body.comment_text,
      article_id: req.body.article_id,
      // use the id from the session
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

//ability to delete a comment
router.delete("/:id", withAdmin, (req, res) => {
  Article_Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
