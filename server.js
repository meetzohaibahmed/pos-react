const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')


// Routes ..
const productRoute = require('./routes/ProductRoute')
app.use(bodyParser.json())
app.get('/', (req,res) =>{
    console.log("we are on root/get")
    res.send("we are on get/root")
})

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser:true, useUnifiedTopology:true }
).
then(() =>{
    console.log("Connected to DB!")
}).
catch((err) =>{
    console.log(err)
})

app.use('/products', productRoute)

app.listen(3000, () =>{
    console.log("App listening at port 3000")
})  