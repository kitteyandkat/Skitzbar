// src/components/ProgressBar.jsx
import React, { useEffect, useState } from 'react';
import '../ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('https://localhost:3000/progress');
        const data = await response.json();
        setProgress(data.totalProgress);
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-large">
        <div className="progress-fill-large" style={{ width: `${progress}%` }}>
          <span id="progress-text">Tier 1 Progress: {progress.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
