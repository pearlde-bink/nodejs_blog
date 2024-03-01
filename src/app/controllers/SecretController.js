function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirecrt("/login");
}

class SecretController {
  //[get] /
  index(req, res) {
    res.render("secret");
  }
}

module.exports = new SecretController();
