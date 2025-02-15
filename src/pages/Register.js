import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth functions
import { app } from '../config/firebase'; // Import Firebase app from your config
import { useNavigate } from 'react-router-dom'; // For navigation after registration
import './Register.css'; // Optional: For styling

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    const auth = getAuth(app); // Initialize Firebase Auth

    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.message); // Display error message if registration fails
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Register;