class LogoutController {
  //[get] /
  index(req, res) {
    req.logout(function (err) {
      if (err) return next(err);
      res.redirect("/");
    });
  }
}

module.exports = new LogoutController();
