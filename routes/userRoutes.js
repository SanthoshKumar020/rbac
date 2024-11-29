const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

// Middleware for specific role access
const adminOnly = roleMiddleware(['Admin']);

// User routes
router.get('/', authMiddleware, adminOnly, userController.getAllUsers);
router.delete('/:id', authMiddleware, adminOnly, userController.deleteUser);

module.exports = router;
