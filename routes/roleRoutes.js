const express = require('express');
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

// Middleware to allow only Admins
const adminOnly = roleMiddleware(['Admin']);

// Role routes
router.post('/create', authMiddleware, adminOnly, roleController.createRole);
// Add more role-related routes as needed

module.exports = router;
