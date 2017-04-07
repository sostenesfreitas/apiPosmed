const callback = require('./callback')
module.exports = (organism, query, res, req) => {
  organism.update({_id: query.id}, req.body, (err,data) => {
    callback(err, res, data)
  })
}
