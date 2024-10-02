// src/components/ProgressForm.jsx
import React, { useState } from 'react';

const ProgressForm = () => {
  const [bits, setBits] = useState('');
  const [donation, setDonation] = useState('');
  const [tier1, setTier1] = useState('');
  const [tier2, setTier2] = useState('');
  const [tier3, setTier3] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bitsAmount = parseFloat(bits) * 0.01;
    const donationAmount = parseFloat(donation);
    const tier1Amount = parseInt(tier1) * 2.5;
    const tier2Amount = parseInt(tier2) * 5;
    const tier3Amount = parseInt(tier3) * 10;

    const totalAmount = 
      (isNaN(bitsAmount) ? 0 : bitsAmount) +
      (isNaN(donationAmount) ? 0 : donationAmount) +
      (isNaN(tier1Amount) ? 0 : tier1Amount) +
      (isNaN(tier2Amount) ? 0 : tier2Amount) +
      (isNaN(tier3Amount) ? 0 : tier3Amount);

    if (totalAmount > 0) {
      try {
        await fetch('https://localhost:3000/progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: totalAmount }),
        });
        alert('Progress updated successfully!');
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    }

    // Clear input fields
    setBits('');
    setDonation('');
    setTier1('');
    setTier2('');
    setTier3('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={bits} 
        onChange={(e) => setBits(e.target.value)} 
        placeholder="Bits Amount" 
      />
      <input 
        type="number" 
        value={donation} 
        onChange={(e) => setDonation(e.target.value)} 
        placeholder="Donation Amount ($)" 
      />
      <input 
        type="number" 
        value={tier1} 
        onChange={(e) => setTier1(e.target.value)} 
        placeholder="Tier 1 Subs Amount" 
      />
      <input 
        type="number" 
        value={tier2} 
        onChange={(e) => setTier2(e.target.value)} 
        placeholder="Tier 2 Subs Amount" 
      />
      <input 
        type="number" 
        value={tier3} 
        onChange={(e) => setTier3(e.target.value)} 
        placeholder="Tier 3 Subs Amount" 
      />
      <button type="submit">Add Progress</button>
    </form>
  );
};

export default ProgressForm;
