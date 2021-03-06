const router = require("express").Router();
const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
// forum:
const forumHomeRoutes = require("./forum-home-routes.js");
const forumDashboardRoutes = require("./forum-dashboard-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// forum:
router.use("/forum", forumHomeRoutes);
router.use("/dashboard", forumDashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
