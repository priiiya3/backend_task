const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

const secret = 'your_jwt_secret';

const createToken = (user) => {
  return jwt.sign({ userId: user.userId }, secret, { expiresIn: '1h' });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid user.' });
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log(user.password, passwordMatch, "password", password, "hii");
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Password not matched.' });
    }
    const token = createToken(user);
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: error.message });
  }
};

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Failed to authenticate token' });

    req.userId = decoded.userId;
    next();
  });
};

module.exports = { login, authenticate };
