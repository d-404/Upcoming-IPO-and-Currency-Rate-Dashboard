import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './allComponents/Header';
import Home from './allComponents/Home';
import Login from './allComponents/Login';
import ContactUs from './allComponents/ContactUs';
import AboutUs from './allComponents/AboutUs';
import Register from './allComponents/Register';
import { AuthProvider } from './allComponents/AuthContext';
import IpoCalender from './allComponents/IpoCalender';
import ExchangeRate from './allComponents/ExchangeRate';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exchange" element={<ExchangeRate />} />
          <Route path="/calender" element={<IpoCalender />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

