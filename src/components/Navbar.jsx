
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/dashboard" className="navbar-brand">
            PayMigo
          </Link>
          
          <ul className="navbar-nav">
            <li>
              <Link 
                to="/dashboard" 
                className={isActive('/dashboard') ? 'active' : ''}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/send-receive" 
                className={isActive('/send-receive') ? 'active' : ''}
              >
                Send & Receive
              </Link>
            </li>
            <li>
              <Link 
                to="/transactions" 
                className={isActive('/transactions') ? 'active' : ''}
              >
                Transactions
              </Link>
            </li>
            <li>
              <Link 
                to="/qr-code" 
                className={isActive('/qr-code') ? 'active' : ''}
              >
                QR Code
              </Link>
            </li>
            <li>
              <Link 
                to="/profile" 
                className={isActive('/profile') ? 'active' : ''}
              >
                Profile
              </Link>
            </li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
            <li>
              <button className="btn btn-outline" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
