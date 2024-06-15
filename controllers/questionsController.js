const { Question } = require('../models');

// Create a new question
const createQuestion = async (req, res) => {
  const { userId, question } = req.body;
  try {
    const newQuestion = await Question.create({ userId, question, answer: 'AI-generated answer' });
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
