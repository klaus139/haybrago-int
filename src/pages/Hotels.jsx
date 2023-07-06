import React from 'react'
import { images } from '../constants'
const Hotels = () => {
  return (
    <>
    <div className="service-banner wf-section">
      <div className="container w-container">
        <div className="banner-title-wrap">
          <div className="subtitle-wrap-dark">
            <div className="subtitle-border"></div>
            <p className="subtitle-dark">Hotels</p>
          </div>
          <h1 className="page-title">Hay Bravo Hotels</h1>
        </div>
      </div>
    </div>
    <div className="service wf-section">
      <div className="container w-container">
        <div className="align-center">
          <div className="subtitle-wrap">
            <div className="subtitle-border"></div>
            <p className="subtitle">What We Do</p>
          </div>
          <h2 className="section-title">Hospitality</h2>
        </div>
        <div className="mg-top-30">
          <div className="w-layout-grid about-service-grid">
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.iconaccomodation}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/service-single" className="service-title"
                  >Accommodation</a
                >
              </div>
              <div className="mg-top-10">
                <p>
                We provide comfortable and convenient accommodations for travelers, offering rooms, suites, or even villas with amenities such as beds, furniture, bathrooms, and in-room facilities.
                </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.iconhospital}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/service-single" className="service-title"
                  >Hospitality Services:</a
                >
              </div>
              <div className="mg-top-10">
                <p>
                Our businesses excel in providing warm hospitality and personalized services to guests. This includes attentive staff, concierge services, room service, and assistance with various guest needs and inquiries.
                </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.icondining}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/service-single" className="service-title"
                  >Dining and Catering</a
                >
              </div>
              <div className="mg-top-10">
                <p>
                Our Hotels often feature on-site restaurants, cafes, or bars that offer a range of culinary options. They may serve breakfast, lunch, and dinner, as well as provide catering services for events and functions.
                </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.iconbed}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/service-single" className="service-title"
                  >Amenities and Facilities</a
                >
              </div>
              <div className="mg-top-10">
                <p>
                We offer a range of amenities and facilities to enhance the guest experience. This may include swimming pools, fitness centers, spas, business centers, conference rooms, parking facilities, and more.
                </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c902dbec0041860bab1753_van-icon.svg"
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/service-single" className="service-title"
                  >Housekeeping and Maintenance:</a
                >
              </div>
              <div className="mg-top-10">
                <p>
                We maintain cleanliness and hygiene through regular housekeeping services. We ensure that rooms and common areas are well-maintained, providing a comfortable and pleasant environment for guests.
                </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c908d026433a30c99bbeff_user-icon.svg"
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/service-single" className="service-title"
                  >Guest Safety and Security:</a
                >
              </div>
              <div className="mg-top-10">
                <p>
                Our Hotel businesses prioritize the safety and security of their guests. We implement measures such as 24/7 front desk services, surveillance systems, secure access to rooms, and emergency response protocols to ensure guest well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="mg-top-40">
            <div
              data-w-id="fd8a62a1-a09a-a7b7-6061-8c84547b0435"
              //style="opacity: 0"
              className="align-center"
            >
              <a
                data-w-id="fd8a62a1-a09a-a7b7-6061-8c84547b0436"
                href="/project"
                className="dark-overlay-button w-inline-block"
                ><div>More Work</div>
                <div
                //   style="
                //     -webkit-transform: translate3d(0px, 0px, 0) scale3d(1, 1, 1)
                //       rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //     -moz-transform: translate3d(0px, 0px, 0) scale3d(1, 1, 1)
                //       rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //     -ms-transform: translate3d(0px, 0px, 0) scale3d(1, 1, 1)
                //       rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //     transform: translate3d(0px, 0px, 0) scale3d(1, 1, 1)
                //       rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   "
                  className="dark-button-hover"
                ></div
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hotels