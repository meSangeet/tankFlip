import React from 'react';
import RegisterForm from '../components/RegisterForm';

function RegisterPage({ onRegister }) {
    return (
      <div>
        <h1>Register Page</h1>
        <h2>Buyer Registration</h2>
        <RegisterForm onRegister={onRegister} userType="buyer" />
      </div>
    );
  }

export default RegisterPage;
