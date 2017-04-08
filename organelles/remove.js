const callback = require('./callback')
// easy easy
module.exports = (organism, query, res) => {
  organism.remove({_id: query.id}, (err, data) => {
    callback(err, res, data)
  })
}
