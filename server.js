const express = require('express')
const app = express()
const port = 5500



app.use(express.static('public'))
app.use('/Bootstrap.3/css', express.static(__dirname + 'public/Bootstrap.3/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/js/Kitchen.js', express.static(__dirname + 'public/js/Kitchen.js'))

app.set('views', './views')
app.set('view-engine', 'ejs')

// app.get('', (req,res) => {
//     res.sendFile(__dirname + '/views/Kitchen.html')
// })

app.get('/', (req,res) => {
    res.render('Kitchen.ejs')
})
app.use('/', require('./routes/menu-categories'))
//  (req,res) => {
//     res.render('menu-categories.ejs')
//})

app.use('/', require('./routes/single-category'))
//  (req,res) => {
//     res.render('single-category.ejs')
// })
app.use('/', require('./routes/about'))
// (req,res) => {
//     res.render('about.ejs')
// })

app.listen(port, () => console.log(`Listening on port ${port}`));
