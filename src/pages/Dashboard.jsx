
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const Dashboard = () => {
  const { user } = useAuth();

  const quickActions = [
    { title: 'Send Money', description: 'Transfer funds to contacts', link: '/send-receive', color: 'var(--accent-primary)' },
    { title: 'Receive Money', description: 'Get paid via QR code', link: '/qr-code', color: 'var(--accent-secondary)' },
    { title: 'View Transactions', description: 'Check your payment history', link: '/transactions', color: '#f59e0b' },
    { title: 'Profile Settings', description: 'Manage your account', link: '/profile', color: '#8b5cf6' }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="mb-6">
          <h1 className="text-3xl mb-4">Welcome back, {user?.name}!</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Manage your payments and transactions
          </p>
        </div>

        <div className="grid grid-2 mb-6">
          <div className="card">
            <h3 className="text-xl mb-4">Account Balance</h3>
            <div className="text-3xl" style={{ color: 'var(--accent-secondary)' }}>
              $2,847.50
            </div>
            <p style={{ color: 'var(--text-secondary)' }} className="mt-4">
              Available for transactions
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl mb-4">Recent Activity</h3>
            <div className="flex justify-between items-center mb-4">
              <span>Payment to Lakshya</span>
              <span style={{ color: 'var(--accent-danger)' }}>-$125.00</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span>Received from Harsh</span>
              <span style={{ color: 'var(--accent-secondary)' }}>+$300.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Payment to Store</span>
              <span style={{ color: 'var(--accent-danger)' }}>-$45.99</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl mb-4">Quick Actions</h2>
          <div className="grid grid-2">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ 
                  borderLeft: `4px solid ${action.color}`,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}>
                  <h3 className="text-xl mb-4">{action.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {action.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
