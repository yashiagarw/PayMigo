import React from 'react';
import './RecentTransactions.css';

export default function RecentTransactions({ transactions }) {
  return (
    <div className="transactions">
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>{tx}</li>
        ))}
      </ul>
    </div>
  );
}
