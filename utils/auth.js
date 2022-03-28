const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    // res.status(404).json({ message: "Must Log In To Have Access." });
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
