module.exports = (organism, query, res) => {
  // create bem simples passo instancio a tabela passando o objeto e dou um save
  const objeto = new organism(JSON.parse(query.obj))
  objeto.save((err, data) => {
    if (err) console.log('ERROR', err)
    res.json(data)
  })
}
