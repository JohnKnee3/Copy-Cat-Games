const withAdmin = (req, res, next) => {
  if (req.session.user_id == "8619e33a-0f24-4f13-bffb-e6de113d328b") {
    // res.status(404).json({ message: "Must Log In To Have Access." });
    console.log("You are logged in as admin");
    next();
  }
};

module.exports = withAdmin;
