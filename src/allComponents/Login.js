import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('user');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      login();
      navigate('/calendar', { state: { username } });
    } else {
      alert('Enter your username and password.');
    }
  };

  return (
    <section className="vh-100">
      <br></br><br></br>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 shadow-lg p-4 mb-5 bg-white rounded">
            <form>
              <div className="mb-4 text-center">
                <h2 className="display-4">Login</h2>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control form-control-lg"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
