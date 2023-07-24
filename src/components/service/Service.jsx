import React from "react";
import { images } from "../../constants";

const Service = () => {
  return (
    <div className="service-section wf-section">
      <div className="container w-container">
        <div className="service-whole-wrap">
          <div className="service-title-wrap">
            <div className="subtitle-wrap">
              <p className="subtitle">What We Do</p>
              <div className="subtitle-border"></div>
            </div>
            <h2 className="section-title">Our Services</h2>
          </div>
          <div className="w-layout-grid service-grid">
            <div
              className="service-card"
              id="w-node-_061c2828-995f-0fab-d200-8f7a4cde8424-42f829bf"
            >
              <div className="home-service-icon-wrap">
                <img
                  src={images.securitylogo}
                  loading="lazy"
                  alt="Security Icon"
                />
              </div>
              <div className="service-line"></div>
              <div>
                <a href="/security" className="service-title">
                  Security Solutions
                </a>
                <div className="mg-top-10">
                  <p>
                    CCTV installation / Surveillance <br /> VIP Escort Service{" "}
                    <br /> Security Consulting <br /> Risk Assessment <br />{" "}
                    Security Architecture Design <br /> Security Training and
                    Certification <br /> Deployment of physical trained guards
                  </p>
                </div>
                <div className="mg-top-60">
                  <div className="align-center">
                    <a
                      data-w-id="25461b7a-b71a-7f01-d198-7700f6ca7c49"
                      href="/security"
                      className="dark-overlay-button w-inline-block"
                    >
                      <div>More</div>
                     
                      <div className="dark-button-hover"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="service-card"
              id="w-node-_99ff713f-4a42-1b91-1897-8485340e4ac9-42f829bf"
            >
              <div className="home-service-icon-wrap">
                <img src={images.farmlogo} loading="lazy" alt="farm Icon" />
              </div>
              <div className="service-line"></div>
              <div>
                <a href="/farms" className="service-title">
                  Hay Bravo Farms
                </a>
                <div className="mg-top-10">
                  <p>
                    Purchase, Import and Export of Oil palm, cassava and lots
                    more
                  </p>
                </div>
                <div className="mg-top-60">
                  <div className="align-center">
                    <a
                      data-w-id="25461b7a-b71a-7f01-d198-7700f6ca7c49"
                      href="/farms"
                      className="dark-overlay-button w-inline-block"
                    >
                      
                      <div>More</div>
                   
                      <div className="dark-button-hover"></div>
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="service-card"
              id="w-node-eb5d8dcf-c877-109a-0c1e-360896407207-42f829bf"
            >
              <div className="home-service-icon-wrap">
                <img
                  src={images.hotellogo}
                  loading="lazy"
                  width="82"
                  alt="Boat Icon"
                />
              </div>
              <div className="service-line"></div>
              <div>
                <a href="/service-single" className="service-title">
                  Hay Barvo Hotels
                </a>
                <div className="mg-top-10">
                  <p>Your partner in Hospitality and Excellence</p>
                </div>
                <div className="mg-top-60">
                  <div className="align-center">
                    <a
                      data-w-id="25461b7a-b71a-7f01-d198-7700f6ca7c49"
                      href="/hotels"
                      className="dark-overlay-button w-inline-block"
                    >
                      <div>More</div>
                   
                      <div className="dark-button-hover"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="service-card"
              id="w-node-_12ab821c-1333-46e4-d207-5423fdb43fa5-42f829bf"
            >
              <div className="home-service-icon-wrap">
                <img
                  src={images.minilogo}
                  style={{ width: "60px" }}
                  loading="lazy"
                  alt="Boat Icon"
                />
              </div>
              <div className="service-line"></div>
              <div>
                <a href="/service-single" className="service-title">
                  Local Mining Services
                </a>
                <div className="mg-top-10">
                  <p>
                    We work closely with strategic partners in the mining
                    industry.
                  </p>
                </div>
                <div className="mg-top-60">
                  <div className="align-center">
                    <a
                      data-w-id="25461b7a-b71a-7f01-d198-7700f6ca7c49"
                      href="/mines"
                      className="dark-overlay-button-about w-inline-block"
                    >
                      <div>More</div>
                      
                      <div className="dark-button-hover"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
