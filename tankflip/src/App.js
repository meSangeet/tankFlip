import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BuyerLoginPage from './pages/BuyerLoginPage';
import SellerLoginPage from './pages/SellerLoginPage';
import BuyerRegisterPage from './pages/BuyerRegisterPage';
import SellerRegisterPage from './pages/SellerRegisterPage';
import BuyerHomePage from './pages/BuyerHomePage';
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userType, setUserType] = useState(null);

  const handleLogin = (email, type) => {
    // Perform login logic (e.g., set loggedInUser and userType states)
    setLoggedInUser(email);
    setUserType(type);
  };

  const handleRegister = (email, type) => {
    // Perform registration logic (e.g., create user and set userType)
    setLoggedInUser(email);
    setUserType(type);
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={<BuyerLoginPage onLogin={handleLogin} />} />
          <Route path="/seller/login" element={<SellerLoginPage onLogin={handleLogin} />} />
          <Route path="/buyer/register" element={<BuyerRegisterPage onRegister={handleRegister} />} />
          <Route path="/seller/register" element={<SellerRegisterPage onRegister={handleRegister} />} />
          <Route path="/buyer/home" element={<BuyerHomePage />} />
        </Routes>

        {loggedInUser && userType === 'buyer' && (
          <div>
            <h2>Welcome, Buyer {loggedInUser}!</h2>
            {/* Display buyer-specific content */}
          </div>
        )}

        {loggedInUser && userType === 'seller' && (
          <div>
            <h2>Welcome, Seller {loggedInUser}!</h2>
            {/* Display seller-specific content */}
          </div>
        )}
    </Router>
  );
}

export default App;
