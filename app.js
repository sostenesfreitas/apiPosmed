'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const pacientes = 'pacientes'
const consultas = 'consultas'
const medicos = 'medicos'
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// aki eh bem simples ainda vou da uma refatorada pra diminuir mais kk
app.post ('/paciente', urlencodedParser, (req, res) => {
  // essa query ta grande mais da pra diminuir passo o tipo do requisição "find, create"
  require('./DNA/dna')(req.query, pacientes, res, req)
})

app.post('/consulta', urlencodedParser, (req, res) => {
  require('./DNA/dna')(req.query, consultas, res, req)
})

app.post('/medicos', urlencodedParser, (req, res) => {
  require('./DNA/dna')(req.query, medicos, res, req)
})

var server = app.listen(8081, () => {
   var host = 'localhost'
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
