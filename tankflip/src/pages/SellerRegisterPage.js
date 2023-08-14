import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles.css';
function RegisterPage({ onRegister }) {
    return (
      <div>
        <RegisterForm onRegister={onRegister} userType="seller" />
        <Link to="/seller/login">Already a user? Login</Link>
      </div>
    );
  }

export default RegisterPage;
