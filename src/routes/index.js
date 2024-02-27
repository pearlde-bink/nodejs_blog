const newsRouter = require('./news')
const siteRouter = require('./site')
const loveRouter = require('./love')

function route(app) {
    app.use('/news', newsRouter)
    app.use('/love', loveRouter)
    app.use('/', siteRouter)

}

module.exports = route
