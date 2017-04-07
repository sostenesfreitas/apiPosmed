'use strict'

const mongoose = require('mongoose')

const _molecule = {
      nr_registro: {type: String},
      diagnostico: require('./../atoms/atom-name'),
      data_consulta: { type: Date, default: Date.now },
      medico: [{
        crm :{type: String},
        nome:require('./../atoms/atom-name'),
      }],
      cuidados: [{
        descricao: require('./../atoms/atom-name')
      }],
      medicamentos: [{
        nome: require('./../atoms/atom-name'),
        frequencia: require('./../atoms/atom-name'),
        perido: [{
          data_inicial: {type: String},
          data_final: {type: String}
        }],
        posologia: require('./../atoms/atom-name')
      }],
    metas: [{
      descricao: require('./../atoms/atom-name'),
      frequencia: require('./../atoms/atom-name'),
      prazo: require('./../atoms/atom-name')
    }]
}
const molecule = new mongoose.Schema(_molecule)
module.exports = molecule
