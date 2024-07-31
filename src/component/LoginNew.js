import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyle.css';  // Ensure this file is properly imported

const LoginNew = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (you can add more complex validation as needed)
    if (formData.username === '' || formData.password === '') {
      alert('Please enter username and password.');
      return;
    }

    // Simulate successful login (replace with actual authentication logic)
    if (formData.username === 'admin' && formData.password === 'password') {
      navigate('/');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Login Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginNew;
