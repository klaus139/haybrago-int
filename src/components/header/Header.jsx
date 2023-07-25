import React from 'react';

import { images } from '../../constants';
//import './header.css'

const Header = () => {
 
 

  return (
    <div className="header-section wf-section">
      <div className="header">
        <div className="container w-container">
          <div className="header-link-wrap">
            <a href="/" aria-current="page" className="logo-wrap w-inline-block w--current">
              <img
                src={images.newlogo}
                style={{ width: '200px', height: '100px', marginLeft: '-20px' }}
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
                <div>
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
     
    </div>
  );
};

export default Header;
