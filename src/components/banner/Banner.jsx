import React from 'react';
import { images } from '../../constants';
const Banner = () => {
  return (
    <div className="banner-section wf-section">
      <div className="container w-container">
        <div className="banner-title-wrap">
          <div className="subtitle-wrap-dark">
            <div className="subtitle-border"></div>
            <p className="subtitle-dark">Security &amp; Hotels Group of Companies</p>
          </div>
          <h1 className="page-title">
            Hay Bravo International
          </h1>
          <p className="text-white">
            We're a leading provider of Security solutions, Hotels and more.
          </p>
          <div className="mg-top-30">
            <a
              href="/about-us"
              className="yellow-overlay-button w-inline-block"
              data-w-id="eb561e47-cb03-a646-ba49-a9acddba1c6c"
            >
              <div>Explore More</div>
              <div
                style={{
                  transform: 'translate3d(0px, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="yellow-button-hover"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
