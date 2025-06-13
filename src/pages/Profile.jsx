
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345'
  });

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saving profile:', formData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="text-3xl mb-6">Profile Settings</h1>

        <div className="grid grid-2">
          <div className="card">
            <div className="text-center mb-6">
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                margin: '0 auto 16px'
              }}>
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <h2 className="text-2xl">{user?.name}</h2>
              <p style={{ color: 'var(--text-secondary)' }}>{user?.email}</p>
            </div>

            <div className="text-center">
              <button className="btn btn-outline mb-4">
                Change Profile Photo
              </button>
              <div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Member since June 2024
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl">Personal Information</h2>
              <button
                className="btn btn-outline"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            ) : (
              <div>
                <div className="mb-4">
                  <label className="form-label">Full Name</label>
                  <div style={{ padding: '12px 0', color: 'var(--text-primary)' }}>
                    {formData.name}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <div style={{ padding: '12px 0', color: 'var(--text-primary)' }}>
                    {formData.email}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Phone</label>
                  <div style={{ padding: '12px 0', color: 'var(--text-primary)' }}>
                    {formData.phone}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Address</label>
                  <div style={{ padding: '12px 0', color: 'var(--text-primary)' }}>
                    {formData.address}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-2 mt-6">
          <div className="card">
            <h3 className="text-xl mb-4">Security Settings</h3>
            <div className="mb-4">
              <button className="btn btn-outline" style={{ width: '100%', marginBottom: '12px' }}>
                Change Password
              </button>
              <button className="btn btn-outline" style={{ width: '100%', marginBottom: '12px' }}>
                Enable Two-Factor Auth
              </button>
              <button className="btn btn-outline" style={{ width: '100%' }}>
                View Login Activity
              </button>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl mb-4">Account Settings</h3>
            <div className="mb-4">
              <button className="btn btn-outline" style={{ width: '100%', marginBottom: '12px' }}>
                Payment Methods
              </button>
              <button className="btn btn-outline" style={{ width: '100%', marginBottom: '12px' }}>
                Privacy Settings
              </button>
              <button className="btn btn-danger" style={{ width: '100%' }}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
