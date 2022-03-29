const router = require("express").Router();
const { Forum_Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const withAdmin = require("../../utils/admin");

//Gets all Comments
router.get("/", (req, res) => {
  Forum_Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Creates a new Comment on the forum post you are on
router.post("/", withAuth, (req, res) => {
  Forum_Comment.create({
    comment_text: req.body.comment_text,
    post_id: req.body.post_id,
    //use the id from the session
    user_id: req.session.user_id,
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//Deletes a comment
router.delete("/:id", withAdmin, (req, res) => {
  Forum_Comment.destroy({
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
