const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/trangchu', (req, res) => {
    res.send('Trang chu em oi')
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