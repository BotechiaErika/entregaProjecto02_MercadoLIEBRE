const express = require('express')
const app = express()
path = require('path')
app.use(express.static('public'));
const resolve = path(__dirname + './public');

app.get('/home' , (req, res) => {
res.sendFile( resolve + '/views/home.html')
})

app.listen(3070, () => 
console.log("rodando 3070")
);
