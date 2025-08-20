import React from 'react';
import './Header.css'; // This is a new CSS file we will create
import logo from '../../assets/images/kukdukoo-logo.png'; // Make sure you have this logo in your assets folder

function Header() {
  return (
    <header className="main-header">
      <nav className="header-nav">
        <button className="nav-button home">
          <img src="/path/to/home-icon.png" alt="Home" />
          <span>HOME</span>
        </button>
        <button className="nav-button info">
          <img src="/path/to/info-icon.png" alt="Info" />
          <span>INFO</span>
        </button>
        <div className="nav-center">
          <img src={logo} alt="Kukdukoo Fest" className="header-logo" />
          <button className="nav-button book-tickets">
            <span>BOOK TICKETS</span>
          </button>
        </div>
        <button className="nav-button activities">
          <img src="/path/to/activities-icon.png" alt="Activities" />
          <span>ACTIVITIES</span>
        </button>
        <button className="nav-button schedule">
          <img src="/path/to/schedule-icon.png" alt="Schedule" />
          <span>SCHEDULE</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;