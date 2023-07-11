/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { images } from '../constants';

const About = () => {
    const [activeTab, setActiveTab] = useState("Tab 1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <>
     <div className="about-us-banner wf-section">
      <div className="container w-container">
        <div>
          <div className="subtitle-wrap-dark">
            <div className="subtitle-border"></div>
            <p className="subtitle-dark">About Us</p>
          </div>
          <h1 className="page-title">About Our Company</h1>
        </div>
      </div>
    </div>
    <div className="about-us-section wf-section">
      <div className="container-medium w-container">
        <div className="w-layout-grid about-us-grid">
          <div
            id="w-node-_039cf7cf-262b-77d9-34dd-4f82af481942-77532b54"
            className="about-image-wrap"
          >
            <img
              src={images.haybravo1}
              width="1307"
              alt="Hotelroom"
              //style="opacity: 0"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1439px) 97vw, 1307px"
              data-w-id="f05be6a8-d216-aa3c-1d27-253a23a1af45"
              loading="lazy"
            //   srcset="
            //     https://assets.website-files.com/63a43a1633ad3e2a969a6958/63b3c7d343a07362864e45c7_about-image-1-p-500.jpg 500w,
            //     https://assets.website-files.com/63a43a1633ad3e2a969a6958/63b3c7d343a07362864e45c7_about-image-1.jpg       726w
            //   "
            />
            <div className="about-separate-image">
              <img
                src={images.privatesecurity}
                loading="lazy"
                //style="opacity: 0"
                data-w-id="91238f5a-6eed-2770-140a-5e1c2e814575"
                alt="private security"
                height='300'
              />
            </div>
          </div>
          <div id="w-node-_591a093e-5758-b28c-4939-1c8b115d6a5a-77532b54">
      <div className="subtitle-wrap">
        <div className="subtitle-border"></div>
        <p className="subtitle">About Us</p>
      </div>
      <h2 className="section-title">Our Company Overview</h2>
      <p>
        Our global reach, deep industry knowledge, innovative technology,
        and extensive network have allowed us to bring the
        latest technology and best service to our customers.
      </p>
      <div
        data-w-id="1fc23173-7701-9bd2-b0c1-69ce864d8e53"
        //style="opacity: 0"
        data-current={activeTab}
        data-easing="ease"
        data-duration-in="300"
        data-duration-out="100"
        className="w-tabs"
      >
        <div className="about-us-button-wrap w-tab-menu">
          <a
            data-w-tab="Tab 1"
            className={`about-us-button w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`}
            onClick={() => handleTabClick('Tab 1')}
          >
            <div>Our Approach</div>
          </a>
          <a
            data-w-tab="Tab 2"
            className={`about-us-button w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`}
            onClick={() => handleTabClick('Tab 2')}
          >
            <div>Our Goal</div>
          </a>
          <a
            data-w-tab="Tab 3"
            className={`about-us-button w-inline-block w-tab-link ${activeTab === 'Tab 3' ? 'w--current' : ''}`}
            onClick={() => handleTabClick('Tab 3')}
          >
            <div>Our Mission</div>
          </a>
        </div>
        <div className="w-tab-content">
          <div data-w-tab="Tab 1" className={`w-tab-pane ${activeTab === 'Tab 1' ? 'w--tab-active' : ''}`}>
            <p>
              We leverage our scale to create innovative and tailored
              solutions that help our customers optimize their supply
              chains to stay ahead of their competition in a market that
              changes every single day.
            </p>
          </div>
          <div data-w-tab="Tab 2" className={`w-tab-pane ${activeTab === 'Tab 2' ? 'w--tab-active' : ''}`}>
            <p>
              Whether you've been in the hotel or security industry, or this is your
              first time crossing a new border, there are officers to
              train, lodgings to book and staff to manage. We're
              with you every step of the way.
            </p>
          </div>
          <div data-w-tab="Tab 3" className={`w-tab-pane ${activeTab === 'Tab 3' ? 'w--tab-active' : ''}`}>
            <p>
              our most advanced security solution yet. It incorporates all
              eServices into one portal, giving you maximum support at
              every stage of your supply chain. From tracking and
              Surveillance, we have you covered.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mg-top-30">
        <a
          data-w-id="7271dd6b-5469-c7a4-dd75-4332060ea60d"
          href="/service"
          className="dark-overlay-button w-inline-block"
        >
          <div>Learn More</div>
        </a>
      </div> */}
    </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About