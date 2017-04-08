
require('../config.js')
var mongoose = require('mongoose')
// esses require aqui eh so pra fazer o populate
require('./../organism/organism')(require('./../molecule/molecule-paciente'), 'pacientes')
require('./../organism/organism')(require('./../molecule/molecule-medico'), 'medicos')
require('./../organism/organism')(require('./../molecule/molecule-consulta'), 'consultas')

module.exports = (query, collection, res, req) => {
  // nessa parte eu to passando o schema e a tabela do banco
  const organism =
  require('./../organism/organism')
  (require('./../molecule/molecule-' + query.molecule)
  , collection)
  // nessa parte eu passo a coluna junto com as querys
  require('./../organelles/' + query.type)(organism, query, res, req)
}
