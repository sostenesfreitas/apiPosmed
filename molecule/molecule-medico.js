'use strict';

const mongoose = require('mongoose')
  , Schema = mongoose.Schema
const _molecule = {
    pacientes: [{ type: Schema.Types.ObjectId, ref: 'pacientes' }],
    name: require('./../atoms/atom-name'),
    crm: {type: String},
    especializacao: require('./../atoms/atom-name')
};
const molecule = new mongoose.Schema(_molecule);

module.exports = molecule;
