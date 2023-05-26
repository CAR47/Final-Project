import React from 'react';

export default function HomePage() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">Secure Yourself</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner bg-primary text-white py-3">
        <div className="container">
          <h1 className="display-4">
            What is a Computer Virus and How Can I Protect My Computer?
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2>Computer Security Threats: Computer Viruses</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dictum nunc, id euismod magna. Mauris
              blandit dapibus mauris, vitae fermentum lectus efficitur id. Cras efficitur tellus id vestibulum aliquet.
              Aliquam erat volutpat. Morbi ut vulputate quam. Fusce tristique volutpat tristique. Proin dignissim ex sed
              ligula finibus consectetur.
            </p>
            {/* Add more content as per your requirements */}
          </div>
          <div className="col-md-4">
            {/* Sidebar content, if any */}
          </div>
        </div>
      </div>
      <form className="d-flex" onSubmit={handleSearch}>
                <input
                  className="form-control me-2 alert-dark"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-dark" type="submit">
                  Search
                </button>
              </form>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <div className="container">
          <p className="text-center">© 2023 Secure Yourself. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
