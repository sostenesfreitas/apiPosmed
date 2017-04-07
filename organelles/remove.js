const callback = require('./callback')
module.exports = (organism, query, res) => {
  organism.remove({_id: query.id}, (err, data) => {
    callback(err, res, data)
  })
}
