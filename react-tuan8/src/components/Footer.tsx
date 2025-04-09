import React from 'react';
import './Footer.css'; // Import file CSS

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section about-us">
        <h3>About Us</h3>
        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="newsletter-button">Send</button>
        </div>
      </div>
        <div>
            <div className="footer-section learn-more">
            <h3>Learn More</h3>
            <ul>
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
            </ul>
        </div>

        <div className="footer-section shop">
            <h3>Shop</h3>
            <ul>
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Send Us Feedback</a></li>
            </ul>
        </div>
        </div>
      <div className="footer-section recipes">
        <h3>Recipes</h3>
        <ul>
          <li><a href="#">What To Cook This Week</a></li>
          <li><a href="#">Pasta</a></li>
          <li><a href="#">Dinner</a></li>
          <li><a href="#">Healthy</a></li>
          <li><a href="#">Vegetarian</a></li>
          <li><a href="#">Vegan</a></li>
          <li><a href="#">Christmas</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="logo-info">
          <img src="./src/images/avatar_small.png" alt="Chefify Logo" className="footer-logo" />
          <p>© 2023 Chefify Company</p>
        </div>
        <div className="legal-links">
          <a href="#">Terms of Service</a>
          <span className="separator">|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
