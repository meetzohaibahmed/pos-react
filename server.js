const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    console.log("we are on root/get")
    res.send("we are on get/root")
})

app.listen(3000, () =>{
    console.log("App listening at port 3000")
})  