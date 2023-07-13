import React, { useState } from 'react';
import {AiOutlineDown} from 'react-icons/ai'
import './nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div  data-animation="default"
    data-collapse="medium"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="navigation-bar w-nav">
          <div className="navbar">
     
      <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/" className="navbar-link">
          Home
        </a>
        <a href="/about-us" className="navbar-link">
          About Us
        </a>
        <div className={`navbar-dropdown ${dropdownOpen ? 'open' : ''}`}>
          <button className="navbar-dropdown-toggle" onClick={toggleDropdown}>
            Services <AiOutlineDown />
          </button>
          <div className="navbar-dropdown-content">
          <a href="/security" className="navbar-dropdown-link">
              Security
            </a>
            <a href="/hotels" className="navbar-dropdown-link">
              Hotels
            </a>
            <a href="/mines" className="navbar-dropdown-link">
              Mines
            </a>
            <a href="/farms" className="navbar-dropdown-link">
              Farms
            </a>
            <a href="/our-team" className="navbar-dropdown-link">
              Our Team
            </a>
           
          </div>
        </div>
        <a href="/project" className="navbar-link">
          Projects
        </a>
        <a href="/our-team" className="navbar-link">
          The Team
        </a>
        <a href="/contact-us" className="navbar-link">
          Contact
        </a>
      </nav>
      <div class="navigation-button-wrap">
            <div class="nav-social-media-wrap">
              <a
                href="https://instagram.com/haybravointernational?igshid=NTc4MTIwNjQ2YQ=="
                class="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc36ddb063a39e687b631_Insta-icon.svg"
                  loading="lazy"
                  alt="Instagram Icon"
                  class="social-icon" /></a
              ><a
                href="https://www.facebook.com/people/Hay-Bravo-international-Security-Consulting-Company-LTD/100083540643909/?paipv=0&eav=AfZk-s4y746llh98g-ucTA49Evlvof1CLxJFw7wUuMuxVa74Hh-VyyK0A-8yJhxdWHw&_rdr"
                class="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc46c51c3425c77fb5dc3_fb-icon.svg"
                  loading="lazy"
                  alt="Facebook Icon"
                  class="social-icon" /></a
              ><a
                href="https://twitter.com/haybravo_ltd"
                class="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc54529c06503197e6691_twiter-icon.svg"
                  loading="lazy"
                  alt="Twitter Icon"
                  class="social-icon" /></a
              ><a
                href="https://www.linkedin.com/in/haybravo-international-limited-75b1a7283"
                class="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc57ea43e8f10547bacad_linkedIn-icon.svg"
                  loading="lazy"
                  alt="LinkedIn Icon"
                  class="social-icon"
              /></a>
            </div>
           
          </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Nav;
