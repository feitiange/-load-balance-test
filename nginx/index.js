const express = require('express')
const process = require('process')
const [app1, app2, app3] = [1,2,3].map(express)

app1.get('/', (req, res) => {
    setTimeout(res.send(`a, work on 3003`))
})
app2.get('/', (req, res) => {
    setTimeout(res.send(`b, work on 3004`))
})
app3.get('/', (req, res) => {
    setTimeout(res.send(`c, work on 3005`))
})

app1.listen(3003);
app2.listen(3004);
app3.listen(3005);

setTimeout(() => process.exit(), 20000);
