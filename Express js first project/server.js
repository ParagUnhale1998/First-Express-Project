const express = require ('express')
const path = require ('path')
const app = express()
const PORT = process.env.PORT || 2003;


app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname + '/index.html'))
})

app.get('/home', (req,res)=> {
    res.sendFile(path.resolve(__dirname + '/index.html'))
})

app.get('/about', (req,res)=> {
    res.sendFile(path.resolve(__dirname + '/about.html'))
})

app.get('/download', (req,res)=> {
    res.download(path.resolve(__dirname + '/about.html'))
})

app.listen(PORT, ()=> {
    console.log(`Server Started on ${PORT}`)
})
