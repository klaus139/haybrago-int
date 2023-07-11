import React from 'react';
import { images } from '../../constants';

const HomeTeam= () => {
  return (
    <div className="home-team-section wf-section">
      <div className="container w-container">
        <div className="align-center">
          <div className="subtitle-wrap">
            <p className="subtitle">HayBravorians</p>
            <div className="subtitle-border"></div>
          </div>
          <h2 className="section-title">Meet The Team</h2>
        </div>
        <div className="mg-top-40">
          <div className="w-layout-grid home-team-grid">
            <div
              id="w-node-_5437c918-4aee-e803-ed09-ea60a5464a22-42f829bf"
              className="team-card"
            >
              <img
                src={images.haruna}
                loading="lazy"
                width="662"
                height='470'
                alt="Team"
              />
              <div className="team-content-wrap">
                <h3 className="author-name text-white">Mr Yusuf Haruna Abiona</h3>
                <p className="team-member-designation">CSP(RTD), Cirtified Protection Officer (CPO). Managing Director ( MD)& Chief Executive Officer (CEO)</p>
              </div>
              <div >
                <a href="http://www.twitter.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc6e1b69b996cd5a8e78a_twitter-icon.svg"
                    loading="lazy"
                    alt="Twitter Icon"
                    className="social-icon"
                  />
                </a>
                <a href="http://www.facebook.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc76edb063abc2787ee1d_facebook-icon.svg"
                    loading="lazy"
                    alt="Facebook Icon"
                    className="social-icon"
                  />
                </a>
                <a href="http://www.instagram.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc7967257e8661f67168f_instagram-icon.svg"
                    loading="lazy"
                    alt="Instagram Icon"
                    className="social-icon"
                  />
                </a>
              </div>
            </div>
            <div
              id="w-node-_4408cd6f-f4c0-bd61-7b5e-0affda1cff6a-42f829bf"
              className="team-card"
            >
              <img
                src={images.peter_olulosha}
                loading="lazy"
                width="505"
                height='470'
                alt="Team"
              />
              <div className="team-content-wrap">
                <h3 className="author-name text-white">Peter Olushola Alao</h3>
                <p className="team-member-designation">Supervisor, Hay Bravo Security Nigeria Limited. Lagos State Chapter.</p>
              </div>
              <div>
                <a href="http://www.linkedin.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc7b9a2891b8728812273_linedin-icon.svg"
                    loading="lazy"
                    alt="LinkedIn Icon"
                    className="social-icon"
                  />
                </a>
                <a href="http://www.twitter.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc6e1b69b996cd5a8e78a_twitter-icon.svg"
                    loading="lazy"
                    alt="Twitter Icon"
                    className="social-icon"
                  />
                </a>
                <a href="http://www.facebook.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc76edb063abc2787ee1d_facebook-icon.svg"
                    loading="lazy"
                    alt="Facebook Icon"
                    className="social-icon"
                  />
                </a>
                <a href="http://www.instagram.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc7967257e8661f67168f_instagram-icon.svg"
                    loading="lazy"
                    alt="Instagram Icon"
                    className="social-icon"
                  />
                </a>
              </div>
            </div>
            <div
              id="w-node-_5b8c597c-6f27-2a1e-7bda-0bc1403b70c7-42f829bf"
              className="team-card"
            >
              <img
                src={images.umar}
                loading="lazy"
                width="724"
                height='470'
                alt="Team"
              />
              <div className="team-content-wrap">
                <h3 className="author-name text-white">Umar Bappayo Umar.</h3>
                <p className="team-member-designation">Supervisor Gombe state</p>
              </div>
              <div>
                <a href="http://www.facebook.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc76edb063abc2787ee1d_facebook-icon.svg"
                    loading="lazy"
                    alt="Facebook Icon"
                    className="social-icon"
                  />
                </a>
                <a href="http://www.instagram.com" className="team-social-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc7967257e8661f67168f_instagram-icon.svg"
                    loading="lazy"
                    alt="Instagram Icon"
                    className="social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeam;
