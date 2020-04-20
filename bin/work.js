const fetch = require('node-fetch');

const f = () => fetch('http://localhost:3000')
    .then(res => res.text())
    .then(body => console.log(body))
    .catch(err => console.log(err.message))
    .finally()

let i;
for(i =0;i< 8; i++)
    setTimeout(f, 1000 * i);
