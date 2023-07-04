import React from 'react';
import { images } from '../../constants';

const Header = () => {
  return (
    
    <div className="header-section wf-section">
      <div className="header">
        <div className="container w-container">
          <div className="header-link-wrap">
            <a href="/" aria-current="page" className="logo-wrap w-inline-block w--current">
              <img
                src={images.logo} 
              style={{'width':'300px', "height":'120px', 'marginLeft':'-20px'}}
                loading="lazy"
                alt="Logistics Logo"
              />
            </a>
            <div className="header-link-block">
              <div className="header-link-card">
                <div className="header-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c903e4cf6b6cf185f0dab1_clock-icon-yellow.svg"
                    loading="lazy"
                    alt="Clock Icon"
                  />
                </div>
                <div>
                  <p className="header-link-text">Mon - Sat 9.00 - 18.00 Sunday Closed</p>
                </div>
              </div>
              <div className="header-link-card">
                <div className="header-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c903f9c4030ab2451541f2_mail-icon-yellow.svg"
                    loading="lazy"
                    alt="Mail Icon"
                  />
                </div>
                <div >
                  <p className="header-link-text">Email</p>
                  <a
                    href="mailto:haybravointernational@gmail.com"
                    className="header-link-text hover-yellow"
                  >
                    haybravointernational@gmail.com
                  </a>
                </div>
              </div>
              <div className="header-link-card">
                <div className="header-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90414c08158aa952ac06c_phone-icon-yellow.svg"
                    loading="lazy"
                    alt="Phone Icon"
                  />
                </div>
                <div>
                  <p className="header-link-text">Call Us</p>
                  <a href="tel:(00)122456789" className="header-link-text hover-yellow">
                    (+234)803 358 6496
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navigation-bar w-nav"
      >
        <div className="nav-bar-container">
          <nav role="navigation" className="navigation-menu w-nav-menu">
            <a
              href="/"
              aria-current="page"
              className="navigation-link w-nav-link w--current"
            >
              Home
            </a>
            <div className="nav-menu-line"></div>
            <a href="/about-us" className="navigation-link w-nav-link">
              About Us
            </a>
            <div className="nav-menu-line"></div>
            <div data-hover="true" data-delay="0" className="nav-dropdown w-dropdown">
              <div className="navigation-link dropdown w-dropdown-toggle">
                <div className="navigation-icon w-icon-dropdown-toggle"></div>
                <div>Pages</div>
              </div>
              <nav className="nav-dropdown-list w-dropdown-list">
                <a href="./service.html" className="nav-dropdown-link w-dropdown-link">
                  Services
                </a>
                <a href="./service-single.html" className="nav-dropdown-link w-dropdown-link">
                  Service Single
                </a>
                <a href="./our-team.html" className="nav-dropdown-link w-dropdown-link">
                  Our Team
                </a>
                <a href="./pricing.html" className="nav-dropdown-link w-dropdown-link">
                  Pricing
                </a>
                <a href="./blog.html" className="nav-dropdown-link w-dropdown-link">
                  Blog
                </a>
              </nav>
            </div>
            <div className="nav-menu-line"></div>
            <a href="/our-project" className="navigation-link w-nav-link">
              Projects
            </a>
            <div className="nav-menu-line"></div>
            <a href="/contact-us" className="navigation-link w-nav-link">
              Contact
            </a>
          </nav>
          <div className="navigation-button-wrap">
            <div className="nav-social-media-wrap">
              <a
                href="http://www.instagram.com"
                className="social-media-link w-inline-block"
              >
                <img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc36ddb063a39e687b631_Insta-icon.svg"
                  loading="lazy"
                  alt="Instagram Icon"
                  className="social-icon"
                />
              </a>
              <a href="http://www.facebook.com" className="social-media-link w-inline-block">
                <img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc46c51c3425c77fb5dc3_fb-icon.svg"
                  loading="lazy"
                  alt="Facebook Icon"
                  className="social-icon"
                />
              </a>
              <a href="http://www.twitter.com" className="social-media-link w-inline-block">
                <img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc54529c06503197e6691_twiter-icon.svg"
                  loading="lazy"
                  alt="Twitter Icon"
                  className="social-icon"
                />
              </a>
              <a href="http://www.linkedin.com" className="social-media-link w-inline-block">
                <img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc57ea43e8f10547bacad_linkedIn-icon.svg"
                  loading="lazy"
                  alt="LinkedIn Icon"
                  className="social-icon"
                />
              </a>
            </div>
            <a href="/contact-us" className="navigation-button w-button">
              Request Quote
            </a>
          </div>
          <div className="nav-menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Header