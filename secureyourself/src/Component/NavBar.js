import React, { useState } from 'react';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    setSearchQuery('');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">Secure Yourself</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Home">Home</a>
              </li>
              <li className="nav-item">
              <DropdownMenu id="dropdown-basic-button" title="Menu">
                <Link className="dropdown-item" to="/register">Register</Link>
                <Link className="dropdown-item" to="/login">Login</Link>
                <Link className="dropdown-item" to="/logout">Logout</Link>
                <Link className="dropdown-item" to="/chat">Chat</Link>
                <Link className="dropdown-item" to="/profile">Profile</Link>
              </DropdownMenu>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/chat">Chat</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sign Out</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/signup">SignUp</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li class="list-item">
                <form className="d-flex" onSubmit={handleSearch}>
                  <input
                    className="form-control me-2 alert-dark"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-danger" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
