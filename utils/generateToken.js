const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '1h' });
};
