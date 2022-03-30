const router = require("express").Router();
const sequelize = require("../config/connection");
const { Forum_Post, User, Forum_Comment } = require("../models");

// get all posts for forum page
router.get("/", (req, res) => {
  console.log("======================");
  console.log(req.session.user_id);
  Forum_Post.findAll({
    order: [["id", "DESC"]],
    include: [
      {
        model: Forum_Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("forum-homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get one forum post
router.get("/forum-post/:id", (req, res) => {
  Forum_Post.findOne({
    where: {
      id: req.params.id,
    },
    order: [[Forum_Comment, "id"]],
    include: [
      {
        model: Forum_Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
