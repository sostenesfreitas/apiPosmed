'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const pacientes = 'pacientes'
const consultas = 'consultas'
const medicos = 'medicos'
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post ('/paciente', urlencodedParser, (req, res) => {
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
