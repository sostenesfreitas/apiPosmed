const callback = require('./callback')
module.exports = (organism, query, res, req)=> {
  organism
  .findOne({_id: query.id})
  .populate(query.populate)
  .exec ((err, data) => {
    callback(err, res, data)
  })
}
