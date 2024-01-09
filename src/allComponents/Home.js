import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth } from './AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div data-testid="home-component">
      <div className="bg-primary py-4">
        <div className="container">
          <h1 className="text-white text-center">Welcome to IPO Tracker & Currency Pulse</h1>
        </div>
      </div>
      <div className="bg-image">
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="overlay text-center">
                <div className="text">
                  <p className="lead" style={{ color: 'blue', fontWeight: 'bold' }}>
                    IPO Tracker & Currency Pulse is an all-in-one platform providing real-time stock market data and comprehensive tools for analysis.
                  </p><br></br>
                  <h2>Key Features:</h2>
                  <ul className="list-group">
                    <li className="list-group-item">Display upcoming IPOs using an external API endpoint</li>
                    <li className="list-group-item">Show the latest currency rates via an external API endpoint</li>
                    <li className="list-group-item">Implement periodic data refresh or user-triggered updates</li>
                    <li className="list-group-item">Leverage mobile features for an enhanced user experience on the app</li>
                  </ul>
                  <br />
                  {isAuthenticated ? (
                    <Link to="/calender" className="btn btn-primary btn-lg">Explore Now</Link>
                  ) : (
                    <Link to="/login" className="btn btn-primary btn-lg">Explore Now</Link>
                  )}

                  <p>Begin exploring our feature-rich platform today!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
