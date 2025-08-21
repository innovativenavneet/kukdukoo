import React from 'react';
import footerImage from '../../assets/images/Footer.png';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@kukdukoo.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            {/* <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a> */}
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          {/* <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/tickets" className="footer-link">Tickets</a> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kukdukoo Fest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;