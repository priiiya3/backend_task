const { User, Question } = require('../models');
const bcrypt = require('bcryptjs');

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve a user profile by userId
const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all questions asked by a user with a given userId
const getUserQuestions = async (req, res) => {
  const { userId } = req.params;
  try {
    const questions = await Question.findAll({ where: { userId } });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  getUserQuestions,
};
