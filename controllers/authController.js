const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

const secret = 'dc0590174eb704ee69bbf537d8af359f394aa1e44ff3dd095087a9e4ce2978e32272388f7b5022d6da68851ced5722f735880efaaecb560f222a41f80f907194';

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid user.' });
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log(user.password, passwordMatch, "password", password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Password not matched.' });
    }
    const token = jwt.sign({ userId: user.userId }, secret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
  res.json({ message: 'Logged out successfully' });
};

const refresh = (req, res) => {
  const { token } = req.body;
  try {
    const { userId } = jwt.verify(token, secret, { ignoreExpiration: true });
    const newToken = jwt.sign({ userId }, secret, { expiresIn: '1h' });
    res.json({ token: newToken });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
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

module.exports = { login, logout, refresh, authenticate };
