const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');
const logger = require('../config/logger');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    logger.error('Authentication error: No token provided');
    return res.status(401).json({ error: 'Access denied' });
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      logger.error(`Authentication error: ${err.message}`);
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
