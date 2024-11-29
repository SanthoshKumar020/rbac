const logger = require('../config/logger');

const authorizeRole = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      logger.error(
        `Authorization error: Role ${userRole} not allowed to access ${req.originalUrl}`
      );
      return res.status(403).json({ error: 'Access forbidden' });
    }
    next();
  };
};

module.exports = authorizeRole;
