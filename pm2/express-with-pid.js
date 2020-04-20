const express = require('express')
const process = require('process')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    setTimeout(res.send(`my pids is ${process.pid}`))
})

app.listen(port)
