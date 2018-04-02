console.log('Hello')
const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())

app.get('/status', (req,res) => {
    res.send({
        message:'Hello World'
    })
})


app.listen(process.env.port || 8081)