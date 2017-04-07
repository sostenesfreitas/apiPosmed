module.exports = (organism, query, res) => {
  const med = new organism(JSON.parse(query.obj))
  med.save((err, data) => {
    if (err) console.log('ERROR', err)
    res.json(data)
  })
}
