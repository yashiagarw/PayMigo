import React from 'react';
import './BalanceCard.css';

export default function BalanceCard({ balance }) {
  return (
    <div className="balance-card">
      <h2>Available Balance</h2>
      <p>${balance.toFixed(2)}</p>
    </div>
  );
}