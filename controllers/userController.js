const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 8);  // Ensure bcrypt hashing is done here
    const user = await User.create({
      userId: uuidv4(),
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserQuestions = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId, {
      include: 'Questions'
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user.Questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, getUser, getUserQuestions };
