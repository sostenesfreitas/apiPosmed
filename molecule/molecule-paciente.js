'use strict'
const mongoose = require('mongoose')
  , Schema = mongoose.Schema
const _molecule = {
    consultas: [{ type: Schema.Types.ObjectId, ref: 'consultas' }],
    name : require('./../atoms/atom-name'),
    sobrenome : require('./../atoms/atom-name'),
    cpf : require('./../atoms/atom-cpf'),
    convenio : [{
      nome: require('./../atoms/atom-name'),
      operadora: require('./../atoms/atom-name'),
      codigo_ans: {type: String}
    }],
    telefones : [{
      numero : {type: String}
    }],
    sexo: {type: String},
    dt_nascimento: {type: String},
    enderecos: [{
      logradouro: require('./../atoms/atom-name'),
      numero: {type: String},
      complemento: require('./../atoms/atom-name'),
      bairro: require('./../atoms/atom-name'),
      cidade: require('./../atoms/atom-name')
    }]
}
const molecule = new mongoose.Schema(_molecule);
module.exports = molecule
