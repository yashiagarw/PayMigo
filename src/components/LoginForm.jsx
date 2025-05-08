import React, { useState } from 'react';
import './LoginForm.css';

export default function LoginForm({ onNext }) {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(phone);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>Phone Number:</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your phone number"
        required
      />
      <button type="submit">Send OTP</button>
    </form>
  );
}