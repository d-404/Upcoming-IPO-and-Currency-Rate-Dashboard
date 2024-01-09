import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import '../App.css';

// if user is logged in
const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    // home page with styles
    <div data-testid="home-component">
      <div className="bg-warning py-3">
        <div className="container">
          {/* Head text */}
          <h1 className="text-gray text-center">IPO Tracker & Currency Rate</h1>
        </div>
      </div>
      <div className="bg-image">
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-md-8 mx-auto">
                <div className="text">
                  {/* Body text */}
                  <p className="lead" style={{ color: 'black'}}>
                    IPO Tracker & Currency Rate provides the users real-time stock market data and the real-time currency exchange rate.
                  </p><br></br>
                  <br />
                  {/* if user is logged in */}
                  {isAuthenticated ? (
                    <Link to="/calender" className="btn btn-success btn-lg">Know More</Link>
                  ) : (
                    <Link to="/login" className="btn btn-success btn-lg">Know More</Link>
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
