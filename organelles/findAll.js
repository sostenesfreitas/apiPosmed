const callback = require('./callback')
module.exports = (organism, query, res) => {
  organism.find({}, (err,data) => {
    callback(err, res, data)
  })
}
