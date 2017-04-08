'use strict';
// aki ele vai retornar a tabela
module.exports = function(Schema, ModelName) {
  const mongoose = require('mongoose');
  return mongoose.model(ModelName, Schema);
}
