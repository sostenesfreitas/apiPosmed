const callback = require('./callback')
// easy preciso nem falar nd
module.exports = (organism, query, res) => {
  organism.find({_id: query.id}, (err,data) => {
    callback(err, res, data)
  })
}
