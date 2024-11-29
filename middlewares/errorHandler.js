const logger = require('../config/logger');

// Centralized error handler middleware
const errorHandler = (err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: statusCode,
    },
  });
};

module.exports = errorHandler;
