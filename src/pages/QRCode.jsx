
import React, { useState } from 'react';

const QRCode = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [qrGenerated, setQrGenerated] = useState(false);

  const generateQR = (e) => {
    e.preventDefault();
    console.log('Generating QR for:', { amount, description });
    setQrGenerated(true);
  };

  const resetQR = () => {
    setQrGenerated(false);
    setAmount('');
    setDescription('');
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="text-3xl mb-6">QR Code Payment</h1>

        <div className="grid grid-2">
          <div className="card">
            <h2 className="text-2xl mb-4">Generate Payment QR</h2>
            
            {!qrGenerated ? (
              <form onSubmit={generateQR}>
                <div className="form-group">
                  <label className="form-label">Amount (Optional)</label>
                  <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                  />
                  <small style={{ color: 'var(--text-secondary)' }}>
                    Leave empty for flexible amount
                  </small>
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
                  Generate QR Code
                </button>
              </form>
            ) : (
              <div className="qr-container">
                <div className="qr-code">
                  <div>QR Code Generated</div>
                  <div style={{ fontSize: '12px', marginTop: '10px' }}>
                    Scan with payment app
                  </div>
                </div>
                
                {amount && (
                  <div className="text-xl" style={{ color: 'var(--accent-secondary)' }}>
                    Amount: ${amount}
                  </div>
                )}
                
                {description && (
                  <div style={{ color: 'var(--text-secondary)' }}>
                    {description}
                  </div>
                )}

                <div className="flex gap-4">
                  <button className="btn btn-secondary">
                    Share QR Code
                  </button>
                  <button className="btn btn-outline" onClick={resetQR}>
                    Generate New
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="card">
            <h2 className="text-2xl mb-4">Scan QR Code</h2>
            <div className="qr-container">
              <div className="qr-code" style={{ 
                background: 'var(--bg-secondary)',
                border: '2px dashed var(--border-color)'
              }}>
                <div>Camera View</div>
                <div style={{ fontSize: '12px', marginTop: '10px' }}>
                  Point camera at QR code
                </div>
              </div>
              
              <button className="btn btn-primary">
                Open Camera
              </button>
              
              <div className="text-center">
                <p style={{ color: 'var(--text-secondary)' }}>
                  Or upload QR code image
                </p>
                <button className="btn btn-outline mt-4">
                  Upload Image
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-6">
          <h3 className="text-xl mb-4">Recent QR Payments</h3>
          <div className="grid grid-3">
            <div style={{ 
              padding: '16px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px'
            }}>
              <div className="flex justify-between items-center mb-2">
                <span>Coffee Shop</span>
                <span style={{ color: 'var(--accent-danger)' }}>-$4.50</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                June 10, 2024
              </p>
            </div>
            
            <div style={{ 
              padding: '16px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px'
            }}>
              <div className="flex justify-between items-center mb-2">
                <span>Parking Fee</span>
                <span style={{ color: 'var(--accent-danger)' }}>-$2.00</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                June 9, 2024
              </p>
            </div>
            
            <div style={{ 
              padding: '16px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px'
            }}>
              <div className="flex justify-between items-center mb-2">
                <span>Bus Ticket</span>
                <span style={{ color: 'var(--accent-danger)' }}>-$3.25</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                June 8, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
