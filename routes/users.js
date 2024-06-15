const express = require('express');
const router = express.Router();
const { createUser, getUser, getUserQuestions } = require('../controllers/userController');
const { authenticate } = require('../controllers/authController');

// User routes
router.post('/', createUser); // No authentication needed for creating a user
router.get('/:userId', authenticate, getUser);
router.get('/:userId/questions', authenticate, getUserQuestions);

module.exports = router;
