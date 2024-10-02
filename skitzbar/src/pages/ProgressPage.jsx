// src/pages/ProgressPage.jsx
import React from 'react';
import ProgressBar from '../components/ProgressBar';

const ProgressPage = ({ progress }) => {
  return (
    <div>
      <h1 className='bar-title'>GOAL TRACKER</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProgressPage;
