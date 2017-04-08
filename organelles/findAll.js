const callback = require('./callback')
// sem comentarios
module.exports = (organism, query, res) => {
  organism.find({}, (err,data) => {
    callback(err, res, data)
  })
}
