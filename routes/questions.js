const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController.js');

// Define the POST route to create a new question
router.post('/', questionsController.createQuestion);

// Define the GET route to retrieve a question by questionId
router.get('/:questionId', questionsController.getQuestion);

module.exports = router;
