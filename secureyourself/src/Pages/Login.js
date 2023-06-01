import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data;
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        window.location.href = '/home';
      } else {
        setErrorMessage('Wrong email or password');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="Login">
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="card p-4 w-50 bg-success p-5 text-dark bg-opacity-10">
          <h2 className="mb-8 text-center">Login</h2>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-dark m-4">
                Login
              </button>
              <Link to="/signup" className="btn btn-primary btn-dark m-4">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}