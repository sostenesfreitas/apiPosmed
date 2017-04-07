
require('../config.js')
var mongoose = require('mongoose')
require('./../organism/organism')(require('./../molecule/molecule-paciente'), 'pacientes')
require('./../organism/organism')(require('./../molecule/molecule-medico'), 'medicos')
require('./../organism/organism')(require('./../molecule/molecule-consulta'), 'consultas')

module.exports = (query, collection, res, req) => {
  const organism =
  require('./../organism/organism')
  (require('./../molecule/molecule-' + query.molecule)
  , collection)
  require('./../organelles/' + query.type)(organism, query, res, req)
}
