import React from 'react';
import '../styles.css';
import BuyerHeader from '../components/BuyerHeader';
function BuyerHomePage() {
  // Example product data (you can fetch this from an API or database)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 20,
      discount: 10,
      seller: 'Seller A',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30,
      discount: 5,
      seller: 'Seller B',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 30,
        discount: 5,
        seller: 'Seller B',
      },
    // Add more products here...
  ];

  return (
    <div>
    <div>
        <BuyerHeader />
    </div>
    <div className="container">
      <h1>Welcome, Buyer!</h1>
      <h2>Available Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discount}% off</p>
            <p>Seller: {product.seller}</p>
            <div className="button-group">
              <button className="add-to-cart">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default BuyerHomePage;
