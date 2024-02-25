const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')

//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/trangchu', (req, res) => {
    res.render('trangchu')
})

app.get('/tintuc', (req, res) => {
    res.send('Tin tuc nhe')
})

app.get('/bink', (req, res) => {
    res.send('Bink dep trai')
})

app.get('/love', (req, res) => {
    res.send('send love and hugs to the world')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})