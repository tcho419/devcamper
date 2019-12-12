// @desc  Logs request to console, custom middleware
//
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}:://${req.get('host')}${req.originalUrl}`);
  next(); // need to call this in every piece of middleware
}

module.exports = logger;