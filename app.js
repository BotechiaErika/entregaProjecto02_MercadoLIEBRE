const express = require('express ');
const app = express();
const path = require('path');
const resolve = require('resolve');
const pathPublic = path.join(__dirname + './public');
let pathHome = resolve(pathPublic);
const static = app.use(express.static(pathHome));

app.get('/*', (req, res) => {
  res.sendFile(app.use(express.static(pathHome)));
});
app.get('/home', (req, res) => {
  res.sendFile(pathHome + '/views/home.html')
});
app.listen(3030, () => {console.log('LEVANTE RUTA PORT 3030')});