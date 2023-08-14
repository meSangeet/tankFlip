import React from 'react';
import LoginForm from '../components/LoginForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles.css';
function LoginPage({ onLogin }) {
    return (
      <div>
        <LoginForm onLogin={onLogin} userType="buyer"/>
        <Link to="/buyer/register">Not a user? Register</Link>
      </div>
    );
  }

export default LoginPage;
