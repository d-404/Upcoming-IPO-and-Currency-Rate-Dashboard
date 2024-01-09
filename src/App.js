// imports

import React from 'react';
import { AuthProvider } from './allComponents/AuthContext';
import IpoCalender from './allComponents/IpoCalender';
import ExchangeRate from './allComponents/ExchangeRate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './allComponents/Header';
import Home from './allComponents/Home';
import Register from './allComponents/Register';
import Login from './allComponents/Login';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
        <Header />
        <Routes>
          {/* navigation */}
          <Route path="/exchange" element={<ExchangeRate />} />
          <Route path="/calender" element={<IpoCalender />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

