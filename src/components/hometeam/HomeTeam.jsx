import React from 'react';

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
                src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63a6c7cf73b07117ca6b81ec_team-image-1.jpg"
                loading="lazy"
                width="662"
                alt="Team"
              />
              <div className="team-content-wrap">
                <h3 className="author-name text-white">Sheila Moore</h3>
                <p className="team-member-designation">CEO</p>
              </div>
              <div className="social-media-wrap">
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
                src="data:image/jpeg;base64,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"
                loading="lazy"
                width="595"
                alt="Team"
              />
              <div className="team-content-wrap">
                <h3 className="author-name text-white">Karim Abdul</h3>
                <p className="team-member-designation">Lead Developer</p>
              </div>
              <div className="social-media-wrap">
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
                src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63a6cc4e0aa24472527499b1_team-image-3.jpg"
                loading="lazy"
                width="724"
                alt="Team"
              />
              <div className="team-content-wrap">
                <h3 className="author-name text-white">Kate Winslot</h3>
                <p className="team-member-designation">Head Security</p>
              </div>
              <div className="social-media-wrap">
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
