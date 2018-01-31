const express = require('express')
const bodyparser = require('body-parser')
const config = require('./config/config')
const app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    res.status(200).send(`<h1>Well come Express App.</h1>`)
})

app.listen(config.port,()=>{
    console.log(`Server running on port: ${config.port}`)

})


