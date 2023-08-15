import React from 'react';
import '../styles.css';
import logo from '../images/logo.png'; 

function BuyerHeader() {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src={logo} alt="Company Logo" />
        <h1>Company Name</h1>
      </div>
      <input className="search-bar" type="text" placeholder="Search products" />
      <div>
        <span className="cart-icon">&#128722;</span>
        <span className="profile-icon">&#128100;</span>
      </div>
    </header>
  );
}

export default BuyerHeader;
