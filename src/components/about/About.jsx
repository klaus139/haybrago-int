import React from 'react';
import { images } from '../../constants';

const About = () => {
  return (
    <div className="about-section wf-section">
      <div className="service-image-wrap">
        
      </div>
      <div>
        <div className="container w-container">
          <div>
            <div className="w-layout-grid about-grid">
              <div id="w-node-_14bbf165-3934-859f-f7b7-01a8a2fc6f87-42f829bf">
                <div className="subtitle-wrap">
                  <p className="subtitle">Why Us</p>
                  <div className="subtitle-border"></div>
                </div>
                <h2 className="section-title">
                  We provide full Security Solutions for all sorts of security infrastructure and problems.
                </h2>
                <div className="about-content">
                  <p>
                    We strive to understand what our clients are going through, what
                    they need, what their price points are, and what’s important
                    to them.
                  </p>
                  <p>
                    We build secure structures that meets international standard. 
                  </p>
                </div>
                <div className="about-points-wrap">
                  <div className="about-list">
                    <div className="icon-wrap">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cb69693f5ddfe3dc72fc70_home-features-icon.svg"
                        loading="lazy"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="about-point">Professional Services</h3>
                  </div>
                  <div className="about-list">
                    <div className="icon-wrap">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c9034db3a4cb214c292477_note-icon.svg"
                        loading="lazy"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="about-point">Optimized for quality delivery</h3>
                  </div>
                </div>
              </div>
              <div
                id="w-node-dc32ca33-0de6-a0a0-b02f-f4ba32e57412-42f829bf"
                className="about-image-wrap"
              >
                <img
                  src={images.securityexpert}
                  //loading="lazy"
                  data-w-id="1f1a020d-bc25-9847-fe2e-8058c0c407c2"
                  alt="security"
                  //style={{ opacity: 0 }}
                />
                <div className="about-image">
                  <img
                    src={images.privatesec}
                    //loading="lazy"
                    width="463"
                    //style={{ opacity: 0 }}
                    alt="pix"
                    data-w-id="a1694d50-ac23-3322-e1d9-d10c75532548"
                  />
                </div>
              </div>
            </div>
            <div className="counter-wrap">
              <div className="counter-card">
                <p className="counter-number">5000</p>
                <div className="counter-text-wrap">
                  <div className="counter-block yellow-gradient"></div>
                  <p className="counter-text">Trained Professional Security Experts</p>
                </div>
              </div>
              <div className="counter-line"></div>
              <div className="counter-card">
                <p className="counter-number">2000</p>
                <div className="counter-text-wrap">
                  <div className="counter-block yellow-gradient"></div>
                  <p className="counter-text">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
