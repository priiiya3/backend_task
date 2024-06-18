const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController.js');
const { authenticate } = require('../controllers/authController'); // Adjust path if necessary

// Define the POST route to create a new question with authentication
router.post('/', authenticate, questionsController.createQuestion);

// Define the GET route to retrieve a question by questionId
router.get('/:questionId', authenticate, questionsController.getQuestion);

module.exports = router;
