const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const questionsRoutes = require('./routes/questions');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionsRoutes);
app.use('/api/users', usersRoutes);

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
