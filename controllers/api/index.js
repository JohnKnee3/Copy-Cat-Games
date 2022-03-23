const router = require("express").Router();

const userRoutes = require("./user-routes");
const articleRoutes = require("./article-routes");
const article_commentRoutes = require("./article_comment-routes");

const forumCommentRoutes = require("./forum-comment-routes");
const forumPostRoutes = require("./forum-post-routes");

router.use("/users", userRoutes);
router.use("/articles", articleRoutes);
router.use("/article_comments", article_commentRoutes);

router.use("/forum-comment", forumCommentRoutes);
router.use("/forum-post", forumPostRoutes);

module.exports = router;
