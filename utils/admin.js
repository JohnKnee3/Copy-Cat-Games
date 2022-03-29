const withAdmin = (req, res, next) => {
  if (req.session.user_id == "8619e33a-0f24-4f13-bffb-e6de113d328b") {
    next();
  } else {
    res.status(404).json({ message: "not the correct login" });
    return;
  }
};

module.exports = withAdmin;
