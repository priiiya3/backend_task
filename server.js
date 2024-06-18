const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const questionsRoutes = require('./routes/questions');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const { authenticate } = require('./controllers/authController');

// serce static files
app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionsRoutes);
app.use('/api/users', usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const { sequelize } = require('./models');
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });