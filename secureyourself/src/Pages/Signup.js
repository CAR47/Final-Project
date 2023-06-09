import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css';
import axios from 'axios';

export default function SignUP() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password
      });
      console.log('User created:', response.data);
      window.location.href = '/';
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="Login">
      <Link to="/" className="btn btn-primary btn-dark m-4">
        Back Page
      </Link>
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="card p-4 w-50 bg-success p-5 text-dark bg-opacity-10">
          <h2 className="mb-8 text-center">Register</h2>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-dark m-4">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}