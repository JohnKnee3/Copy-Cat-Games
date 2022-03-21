const router = require("express").Router();

const userRoutes = require("./user-routes");
const articleRoutes = require("./article-routes");
const article_commentRoutes = require("./article_comment-routes");

router.use("/users", userRoutes);
router.use("/articles", articleRoutes);
router.use("/article_comments", article_commentRoutes);

module.exports = router;
