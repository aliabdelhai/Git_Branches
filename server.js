const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)


const port = 5000;
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})


