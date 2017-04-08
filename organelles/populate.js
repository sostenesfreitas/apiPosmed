const callback = require('./callback')
// isso aki eh do moongose que eh um ODM ele faz um basicamente um inner join
module.exports = (organism, query, res, req)=> {
  organism
  .findOne({cpf: query.cpf})
  //aki eu passo a coluna que vai ser populada no caso a de consultas
  .populate(query.populate)
  .exec ((err, data) => {
    callback(err, res, data)
  })
}
