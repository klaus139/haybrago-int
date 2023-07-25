import React from 'react';
import { images } from '../../constants';
const Footer = () => {
  return (
    <div className="footer-section wf-section">
      <div className="footer-shade-bg"></div>
      <div className="container w-container">
        <div className="w-layout-grid footer-grid">
          <div
            id="w-node-_1a03c1d7-10ce-f356-ab94-97121185ed72-1185ed6e"
            data-w-id="1a03c1d7-10ce-f356-ab94-97121185ed72"
            className="footer-content-wrap"
          >
            <a
              id="w-node-_1a03c1d7-10ce-f356-ab94-97121185ed73-1185ed6e"
              href="/"
              aria-current="page"
              className="footer-logo-wrap w-inline-block w--current"
            >
              <img
                src={images.newlogo}
                style={{ width: '200px', height: '100px', marginLeft: '30px' }}
                loading="lazy"
                alt="Logistics Logo"
              />
            </a>
            <div className="footer-content-block">
              <p className="footer-text">
                To be the industry leader, globally recognized for effective &amp; efficient solutions. To provide innovative
                solutions delivering quality, excellence and speed.
              </p>
              <div className="footer-contact-link-wrap">
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
                    <a href="mailto:haybravointernational@gmail.com" className="header-link-text hover-yellow">
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
                    <a href="tel:+2348033586496" className="header-link-text hover-yellow">
                      (+234)803 358 6496
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_1a03c1d7-10ce-f356-ab94-97121185ed89-1185ed6e" className="footer-link-wrap">
            <div className="footer-title-wrap">
              <h3 className="footer-title">Pages</h3>
            </div>
            <div className="footer-link-block">
              <a href="/about-us" className="footer-link">
                About Us
              </a>
              <a href="/security" className="footer-link">
                Security
              </a>
              <a href="/hotels" className="footer-link">
                Hotels
              </a>
              <a href="/farms" className="footer-link">
                Farms
              </a>
              <a href="/mines" className="footer-link">
                Mines
              </a>
              <a href="/our-team" className="footer-link">
                Our Team
              </a>
              <a href="/our-project" className="footer-link">
                Our Project
              </a>
              
              <a href="/contact-us" className="footer-link">
                Contact
              </a>
            </div>
          </div>
          <div id="w-node-_1a03c1d7-10ce-f356-ab94-97121185ed9a-1185ed6e" className="footer-link-wrap">
            <div className="footer-title-wrap">
              <h3 className="footer-title">Links</h3>
            </div>
            <div className="footer-link-block">
              {/* <a href="/style-guide" className="footer-link">
                Style Guide
              </a>
              <a href="/changelog" className="footer-link">
                Changelog
              </a> */}
              <a href="/licenses" className="footer-link">
                Licenses
              </a>
              {/* <a href="https://transitflow-template.webflow.io/401" className="footer-link">
                Protected
              </a> */}
              <a href="https://transitflow-template.webflow.io/404" className="footer-link">
                Not Found
              </a>
            </div>
          </div>
          <div
            id="w-node-_1a03c1d7-10ce-f356-ab94-97121185edad-1185ed6e"
            data-w-id="1a03c1d7-10ce-f356-ab94-97121185edad"
            className="footer-form-wrapper"
          >
            <div className="footer-title-wrap subscribe-title">
              <h3 className="footer-title">Subscribe</h3>
            </div>
            <div className="footer-form-block w-form">
              <form
                id="wf-form-Email-Form-1"
                name="wf-form-Email-Form-1"
                data-name="Email Form 1"
                method="get"
                className="footer-form-wrap"
                data-wf-page-id="63a57e9a6bba275742f829bf"
                data-wf-element-id="1a03c1d7-10ce-f356-ab94-97121185edb2"
              >
                <input
                  type="email"
                  className="footer-text-field w-input"
                  maxLength="256"
                  name="Footer-Email"
                  data-name="Footer Email"
                  placeholder="Email here*"
                  id="Footer-Email"
                  required=""
                />
                <div className="footer-social-wrap">
                  <input
                    type="submit"
                    value="Send Now"
                    data-wait="Please wait..."
                    className="primary-button w-button"
                  />
                  <div className="footer-social-media-wrap">
                    <a href="https://www.linkedin.com/in/haybravo-international-limited-75b1a7283" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc57ea43e8f10547bacad_linkedIn-icon.svg"
                        loading="lazy"
                        alt="LinkedIn Icon"
                        className="social-icon"
                      />
                    </a>
                    <a href="https://twitter.com/haybravo_ltd" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc54529c06503197e6691_twiter-icon.svg"
                        loading="lazy"
                        alt="Twitter Icon"
                        className="social-icon"
                      />
                    </a>
                    <a href="https://www.facebook.com/people/Hay-Bravo-international-Security-Consulting-Company-LTD/100083540643909/?paipv=0&eav=AfZk-s4y746llh98g-ucTA49Evlvof1CLxJFw7wUuMuxVa74Hh-VyyK0A-8yJhxdWHw&_rdr" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc46c51c3425c77fb5dc3_fb-icon.svg"
                        loading="lazy"
                        alt="Facebook Icon"
                        className="social-icon"
                      />
                    </a>
                  </div>
                </div>
              </form>
              <div className="success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="container w-container">
          <div data-w-id="1a03c1d7-10ce-f356-ab94-97121185edc5" className="copyright-wrap">
            <p className="copyright-text">
              Copyright © Hay Bravo International | Designed by{' '}
              <a href="https:nicklaus-portfolio.netlify.app/" target="_blank" className="copyright-link" rel="noreferrer">
                Klaus{' '}
              </a>
              - Powered by{' '}
              <a href="https:nickoklaus5@gmail.com" target="_blank" className="copyright-link" rel="noreferrer">
                KlausTech
              </a>
              .
            </p>
            {/* <div className="page-link-wrap">
              <a href="/style-guide" className="page-link">
                Style Guide
              </a>
              <a href="/licenses" className="page-link">
                Licenses
              </a>
              <a href="/changelog" className="page-link">
                Changelog
              </a>
              <a href="https://transitflow-template.webflow.io/401" className="page-link">
                Password
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
