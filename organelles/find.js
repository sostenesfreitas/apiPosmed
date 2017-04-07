const callback = require('./callback')
module.exports = (organism, query, res) => {
  organism.find({_id: query.id}, (err,data) => {
    callback(err, res, data)
  })
}
