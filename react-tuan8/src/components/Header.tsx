import React from 'react';
import './Header.css'; 

export default function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src="./src/images/avatar_small.png" alt="" className="logo-icon" />
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="What would you like to cook?" className="search-input" />
      </div>

      <nav className="nav-links">
        <a href="#" className="nav-item">What to cook</a>
        <a href="#" className="nav-item">Recipes</a>
        <a href="#" className="nav-item">Ingredients</a>
        <a href="#" className="nav-item">Occasions</a>
        <a href="#" className="nav-item">About Us</a>
      </nav>

      <div>
        <button className="login-button">Login</button>
        <button className="subscribe-button">Subscribe</button>
      </div>
    </header>
  );
}
