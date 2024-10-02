// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProgressPage from './pages/ProgressPage';
import FormPage from './pages/FormPage';

function App() {
  const [progress, setProgress] = useState(0); // Start progress at 0%
  const goalAmount = 600;

  const handleAddProgress = (amount) => {
    setProgress((prevProgress) => {
      const currentTotal = (prevProgress / 100) * goalAmount;
      const newTotal = currentTotal + amount;
      return Math.min((newTotal / goalAmount) * 100, 100); // Cap progress at 100%
    });
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Progress Page</Link> | 
          <Link to="/form">Form Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProgressPage progress={progress} />} />
          <Route path="/form" element={<FormPage onAddProgress={handleAddProgress} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
