const Course = require('../models/Course')

class SiteController {
  //[get] /
  index(req, res) {
    // res.render("home");
    Course.find({}).then(course => {
      res.json(course)
    }).catch(err => {
      res.status(400).json({ error: "ERROR" })
    })
  }


  //[get] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
