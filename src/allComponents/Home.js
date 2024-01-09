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
          <h1 className="text-white text-center">IPO Tracker & Currency Rate</h1>
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
                  <br />
                  {isAuthenticated ? (
                    <Link to="/calender" className="btn btn-primary btn-lg">Explore Now</Link>
                  ) : (
                    <Link to="/login" className="btn btn-primary btn-lg">Explore Now</Link>
                  )}
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
