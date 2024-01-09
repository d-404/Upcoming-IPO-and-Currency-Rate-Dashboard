import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div data-testid="header-component">
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        {/* Navbar text */}
        <a className="navbar-brand" href="/">IPO Tracker & Currency Rate</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* if user is logged in */}
            {isAuthenticated ? (
              <>
              {/* Menu Items */}
                <li className="nav-item">
                  {/* ExchangeRate Menu */}
                  <Link className="nav-link" to="/exchange">Exchange Rates</Link>
                </li>
                <li className="nav-item">
                  {/* IPO Menu */}
                  <Link className="nav-link" to="/calender">IPO calender</Link>
                </li>
                <li className="nav-item">
                  {/* Logout Menu */}
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
              {/* if user is not logged in */}
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login </Link>
                </li>
              </>
            )}
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default Header;
