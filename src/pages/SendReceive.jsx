
import React, { useState } from 'react';

const SendReceive = () => {
  const [activeTab, setActiveTab] = useState('send');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [description, setDescription] = useState('');

  const handleSendMoney = (e) => {
    e.preventDefault();
    console.log('Sending money:', { amount, recipient, description });
    // Reset form
    setAmount('');
    setRecipient('');
    setDescription('');
    alert('Payment sent successfully!');
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="text-3xl mb-6">Send & Receive Money</h1>

        <div className="card">
          <div className="flex gap-4 mb-6">
            <button
              className={`btn ${activeTab === 'send' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('send')}
            >
              Send Money
            </button>
            <button
              className={`btn ${activeTab === 'receive' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('receive')}
            >
              Receive Money
            </button>
          </div>

          {activeTab === 'send' && (
            <div>
              <h2 className="text-2xl mb-4">Send Money</h2>
              <form onSubmit={handleSendMoney}>
                <div className="form-group">
                  <label className="form-label">Recipient Email or Phone</label>
                  <input
                    type="text"
                    className="form-input"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Enter recipient's email or phone"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Amount ($)</label>
                  <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description (Optional)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What's this payment for?"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Money
                </button>
              </form>
            </div>
          )}

          {activeTab === 'receive' && (
            <div>
              <h2 className="text-2xl mb-4">Receive Money</h2>
              <div className="text-center">
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Share your payment details with someone to receive money
                </p>
                
                <div className="card" style={{ 
                  background: 'var(--bg-secondary)',
                  border: '2px dashed var(--border-color)'
                }}>
                  <h3 className="text-xl mb-4">Your Payment Details</h3>
                  <div className="mb-4">
                    <strong>Email:</strong> john.doe@email.com
                  </div>
                  <div className="mb-4">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </div>
                  <div className="mb-4">
                    <strong>Account ID:</strong> PAY_12345678
                  </div>
                  <button className="btn btn-secondary">
                    Copy Details
                  </button>
                </div>

                <div className="mt-6">
                  <p className="mb-4">Or generate a QR code for quick payments</p>
                  <button className="btn btn-outline">
                    Generate QR Code
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SendReceive;
