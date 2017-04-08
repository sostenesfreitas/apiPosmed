const callback = require('./callback')
// essa parte eu fiz pra quando add a consulta ele da um find no paciente e relaciona a consulta com paciente
module.exports = (organism, query, res, req) => {
  organism
  .findOneAndUpdate(
      {cpf: query.cpf},
      // essaa parte eu passo {consultas: _id}
      {$addToSet: req.body},
      (err, data) => {
         callback(err, res, data)
      }
  )
}
