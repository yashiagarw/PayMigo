
import React from 'react';

const Transactions = () => {
  const transactions = [
    { id: 1, type: 'sent', recipient: 'John Doe', amount: 125.00, date: 'June 12, 2024', status: 'completed', description: 'Lunch payment' },
    { id: 2, type: 'received', recipient: 'Alice Smith', amount: 300.00, date: 'June 11, 2024', status: 'completed', description: 'Freelance work' },
    { id: 3, type: 'sent', recipient: 'Coffee Shop', amount: 4.50, date: 'June 10, 2024', status: 'completed', description: 'Morning coffee' },
    { id: 4, type: 'sent', recipient: 'Bob Wilson', amount: 75.25, date: 'June 9, 2024', status: 'pending', description: 'Dinner split' },
    { id: 5, type: 'received', recipient: 'Mom', amount: 200.00, date: 'June 8, 2024', status: 'completed', description: 'Birthday gift' },
    { id: 6, type: 'sent', recipient: 'Online Store', amount: 89.99, date: 'June 7, 2024', status: 'failed', description: 'Product purchase' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'pending': return 'status-pending';
      case 'failed': return 'status-failed';
      default: return '';
    }
  };

  const getTypeColor = (type, amount) => {
    return type === 'sent' ? 'var(--accent-danger)' : 'var(--accent-secondary)';
  };

  const formatAmount = (type, amount) => {
    const sign = type === 'sent' ? '-' : '+';
    return `${sign}$${amount.toFixed(2)}`;
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="text-3xl mb-6">Transaction History</h1>

        <div className="card mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl">Recent Transactions</h2>
            <div className="flex gap-4">
              <select className="form-input" style={{ width: 'auto' }}>
                <option>All Types</option>
                <option>Sent</option>
                <option>Received</option>
              </select>
              <select className="form-input" style={{ width: 'auto' }}>
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Type</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Recipient/Sender</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Description</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>Amount</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px' }}>{transaction.date}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ 
                        textTransform: 'capitalize',
                        color: getTypeColor(transaction.type, transaction.amount)
                      }}>
                        {transaction.type}
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>{transaction.recipient}</td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>
                      {transaction.description}
                    </td>
                    <td style={{ 
                      padding: '12px', 
                      textAlign: 'right',
                      color: getTypeColor(transaction.type, transaction.amount),
                      fontWeight: '600'
                    }}>
                      {formatAmount(transaction.type, transaction.amount)}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>
                      <span className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-3">
          <div className="card">
            <h3 className="text-xl mb-4">This Month</h3>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span>Total Sent</span>
                <span style={{ color: 'var(--accent-danger)' }}>-$294.74</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Received</span>
                <span style={{ color: 'var(--accent-secondary)' }}>+$500.00</span>
              </div>
            </div>
            <div style={{ 
              borderTop: '1px solid var(--border-color)', 
              paddingTop: '16px' 
            }}>
              <div className="flex justify-between items-center">
                <strong>Net Total</strong>
                <strong style={{ color: 'var(--accent-secondary)' }}>+$205.26</strong>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl mb-4">Quick Stats</h3>
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <span>Transactions</span>
                <span>47</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Average Amount</span>
                <span>$58.32</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Largest Transaction</span>
                <span>$300.00</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl mb-4">Export Options</h3>
            <button className="btn btn-outline" style={{ width: '100%', marginBottom: '12px' }}>
              Download PDF
            </button>
            <button className="btn btn-outline" style={{ width: '100%', marginBottom: '12px' }}>
              Export CSV
            </button>
            <button className="btn btn-outline" style={{ width: '100%' }}>
              Email Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
