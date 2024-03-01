class LoginController {
  //[get] /
  index(req, res) {
    res.render("login");
  }

  //[post]
  async login(req, res) {
    try {
      // check if user exists
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        //check if password matches
        const result = req.body.password === user.password;
        if (result) {
          res.render("secret");
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } else {
        res.render("search");
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

module.exports = new LoginController();
