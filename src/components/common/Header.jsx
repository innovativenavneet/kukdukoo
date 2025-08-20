import React from 'react';
import './Header.css';
import logo from '../../assets/images/kukdukoo-logo.png';

function Header() {
  return (
    <header className="main-header">
      <nav className="header-nav">
        <button className="nav-button home">
          <span>HOME</span>
        </button>
        <button className="nav-button info">
          <span>INFO</span>
        </button>
        <div className="nav-center">
          <img src={logo} alt="Kukdukoo Fest" className="header-logo" />
          <button className="nav-button book-tickets">
            <span>BOOK TICKETS</span>
          </button>
        </div>
        <button className="nav-button activities">
          <span>ACTIVITIES</span>
        </button>
        <button className="nav-button schedule">
          <span>SCHEDULE</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;