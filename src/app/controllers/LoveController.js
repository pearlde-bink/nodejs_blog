class LoveController {
  //[get] /
  index(req, res) {
    res.send("send love and hugs to the world");
  }

  //[get] /search
  loveEm(req, res) {
    res.send("love em");
  }
}

module.exports = new LoveController();
