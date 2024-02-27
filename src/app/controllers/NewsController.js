class NewsController {

    //[get] /news
    index(req, res) {
        res.render('news');
    }

    //[get] /news/:slug
    show(req, res) {
        res.send("news detail")
    }

    africa(req, res) {
        res.send("this is Africa")
    }
}

module.exports = new NewsController