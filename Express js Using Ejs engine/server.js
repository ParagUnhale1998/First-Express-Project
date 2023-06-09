const express = require ('express')
const path = require ('path')
const app = express()
const PORT = process.env.PORT || 2005;

app.set('view engine', 'ejs') // first key and then second value

// console.log(app.get('view engine')) // for cheack engine works
// console.log(app.get('views')) //for cheack where to store data and where this folder is create // move all the html files to views and change the extection of html to ejs
// app.set('views', 'templates') // for chenging path of view and the view is templetes we can use templates istand of views

app.use(express.static('public'))

app.get('/', (req,res)=> {
    res.render('index' , {
        title:'Home Page'
    })})


app.get('/about', (req,res)=> {
    res.render('about', {
        title:'about Page'
    })})

app.get('/download', (req,res)=> {
    res.download(path.resolve(__dirname + '/views/about.ejs'))
})

app.listen(PORT, ()=> {
    console.log(`Server Started on ${PORT}`)
})
