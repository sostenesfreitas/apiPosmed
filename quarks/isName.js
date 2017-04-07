module.exports = (value) => {

	const regex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/g
	const isEmpty = require('./isEmpty')(value)
	const isString = require('./isString')(value)

	if (isEmpty || !isString) return false

	return regex.test(value);

 }
