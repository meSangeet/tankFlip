import React from 'react';
import RegisterForm from '../components/RegisterForm';

function RegisterPage({ onRegister }) {
    return (
      <div>
        <h1>Register Page</h1>
        <h2>Seller Registration</h2>
        <RegisterForm onRegister={onRegister} userType="seller" />
      </div>
    );
  }

export default RegisterPage;
