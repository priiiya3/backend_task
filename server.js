const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const questionsRoutes = require('./routes/questions');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const { authenticate } = require('./controllers/authController');

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/questions', authenticate, questionsRoutes);
app.use('/api/users', usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
