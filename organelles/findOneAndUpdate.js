const callback = require('./callback')
module.exports = (organism, query, res, req) => {
  test = {consultas: req.query.consultas}
  console.log(test)
  organism
  .findOneAndUpdate(
      {cpf: query.cpf},
      {$addToSet: test},
      (err, data) => {
         callback(err, res, data)
      }
  )
}
