import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles.css';
function RegisterPage({ onRegister }) {
    return (
      <div>
        <RegisterForm onRegister={onRegister} userType="buyer" />
        <Link to="/">Already a user ? login</Link>
        <br></br>
        <Link to="/seller/login">Seller website</Link>
      </div>
    );
  }

export default RegisterPage;
