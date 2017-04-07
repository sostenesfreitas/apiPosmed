const atom = {
  type: String
, set: require('./../quarks/toLower')
, validate: require('./../quarks/isName')
, required: true
}
module.exports = atom
