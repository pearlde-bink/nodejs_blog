const User = require("../models/User");
class RegisterController {
  //[get] /
  async index(req, res) {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    return res.status(200).json(user);
  }
}

module.exports = new RegisterController();
