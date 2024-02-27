const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')

const route = require('./routes')

//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ //middleware xu ly form
    extended: true
}))
app.use(express.json())

//Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})