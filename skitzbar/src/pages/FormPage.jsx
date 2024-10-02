// src/pages/FormPage.jsx
import React from 'react';
import ProgressForm from '../components/ProgressForm';

const FormPage = ({ onAddProgress }) => {
  return (
    <div>
      <h1>Form Page</h1>
      <ProgressForm onAddProgress={onAddProgress} />
    </div>
  );
};

export default FormPage;
