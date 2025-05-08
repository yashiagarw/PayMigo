import React, { useState } from 'react';
import './OTPInput.css';

export default function OTPInput({ onVerify }) {
  const [otp, setOtp] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    onVerify(otp);
  };

  return (
    <form className="otp-form" onSubmit={handleVerify}>
      <label>Enter OTP:</label>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        required
      />
      <button type="submit">Verify</button>
    </form>
  );
}