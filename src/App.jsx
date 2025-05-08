import React, { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </>
  );
}

export default App;


