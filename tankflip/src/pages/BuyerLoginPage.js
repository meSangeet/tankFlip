import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage({ onLogin }) {
    return (
      <div>
        <h1>Login Page</h1>
        <h2>Buyer Login</h2>
        <LoginForm onLogin={onLogin} userType="buyer" />
      </div>
    );
  }

export default LoginPage;
