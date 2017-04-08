module.exports = (err, res, data) => {
  //ja que todas as orgenelas tem um callback isso eh um padrao todo padrao vira modulo
    if (err) console.log(err)
    return res.json(data)
}
