// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated in-memory database for simplicity (you could replace this with a real database later)
let progressData = {
  totalProgress: 0
};

// Endpoint to get the current progress
app.get('/progress', (req, res) => {
  res.json(progressData);
});

// Endpoint to update the progress
app.post('/progress', (req, res) => {
  const { amount } = req.body;

  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Amount must be a positive number' });
  }

  progressData.totalProgress = Math.min(progressData.totalProgress + amount, 100); // Cap progress at 100%
  res.json({ message: 'Progress updated successfully', progress: progressData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
