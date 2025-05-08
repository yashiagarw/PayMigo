import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import OTPInput from '../components/OTPInput';
import LoginFooter from '../components/LoginFooter';

export default function Login({ onLogin }) {
  const [step, setStep] = useState(1);

  const handlePhoneSubmit = (phone) => {
    console.log('Phone:', phone);
    setStep(2);
  };

  const handleOtpVerify = (otp) => {
    console.log('OTP:', otp);
    onLogin();
  };

  return (
    <div>
      {step === 1 ? <LoginForm onNext={handlePhoneSubmit} /> : <OTPInput onVerify={handleOtpVerify} />}
      <LoginFooter />
    </div>
  );
}