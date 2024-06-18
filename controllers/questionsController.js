const axios = require('axios');
const { Question } = require('../models');

// Kindly replce 'OPENAI_API_KEY' with your actual OpenAI API key
const OPENAI_API_KEY = 'OPENAI_API_KEY';
const OPENAI_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions';

// Create a new question
const createQuestion = async (req, res) => {
  const { question } = req.body;
  
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    };
    
    const requestBody = {
      prompt: question,
      max_tokens: 150
    };

    const response = await axios.post(OPENAI_ENDPOINT, requestBody, { headers });
    const answer = response.data.choices[0].text.trim();

    const newQuestion = await Question.create({ userId: req.userId, question, answer });
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error from OpenAI:', error.message);
    res.status(500).json({ error: 'Failed to generate answer from AI' });
  }
};

// Retrieve a question by questionId
const getQuestion = async (req, res) => {
  const { questionId } = req.params;
  try {
    const question = await Question.findByPk(questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createQuestion,
  getQuestion,
};
