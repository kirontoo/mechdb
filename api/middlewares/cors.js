
module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization')

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }

  next()
}
