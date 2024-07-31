const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/login', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
