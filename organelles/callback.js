module.exports = (err, res, data) => {
    if (err) console.log(err)
    return res.json(data)
}
