/* eslint-disable react/style-prop-object */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     form.current,
    //     'YOUR_USER_ID'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       toast.success('Message sent successfully!');
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    emailjs.sendForm('service_f40lvtq', 'template_zt5t7rg', form.current, 'p-tbLsuhs8gF_oSdT')
    .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <>
      <div className="contact-us-banner wf-section">
        <div className="container w-container">
          <div>
            <div className="subtitle-wrap-dark">
              <div className="subtitle-border"></div>
              <p className="subtitle-dark">Reach Us</p>
            </div>
            <h1 className="page-title">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="contact-us wf-section">
        <div className="container-small w-container">
          <div className="contact-us-wrap">
            <div className="contact-us-title-wrap">
              <div className="subtitle-wrap-transparent">
                <div className="subtitle-border"></div>
                <p className="subtitle-dark">Contact</p>
              </div>
              <h2 className="section-title text-white">Get in touch with us</h2>
              <p className="text-white">
                We appreciate your interest. Please complete the form below, and we
                will contact you to discuss your warehousing, distribution, air,
                ocean freight, or any other logistics needs.
              </p>
            </div>
            <div
              data-w-id="92d97fd4-4786-128d-fd38-70e4fcb5b832"
              //style="opacity: 0"
              className="contact-link-block"
            >
              <div className="contact-link-wrap">
                <div className="contact-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90fd8cf6b6c8e41f19872_mail-icon-white.svg"
                    loading="lazy"
                    alt="Mail Icon"
                  />
                </div>
                <a
                  href="mailto:haybravointernational@gmail.com"
                  className="header-link-text hover-yellow"
                >
                  haybravointernational@gmail.com
                </a>
              </div>
              <div className="contact-link-wrap">
                <div className="contact-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90acbf62f255cb32898fb_phone-icon-white.svg"
                    loading="lazy"
                    alt="Phone Icon"
                  />
                </div>
                <a href="tel:+2348033586496" className="header-link-text hover-yellow">
                  (+234)803 358 6496
                </a>
              </div>
              <div className="contact-link-wrap">
                <div className="contact-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90fe826433a71e59c291a_clock-icon-white.svg"
                    loading="lazy"
                    alt="Clock Icon"
                  />
                </div>
                <p className="header-link-text">24 / 7</p>
              </div>
            </div>
            <div className="contact-form-block w-form">
              <form
                ref={form}
                onSubmit={sendEmail}
                method="post"
                name="email-form"
                data-name="Email Form"
                //style="opacity: 0"
                data-w-id="f7b2193c-b81b-ab93-ab76-83f08171e9e1"
                id="email-form"
                className="contact-page-form"
              >
                <div className="contact-text-field-divider">
                  <input
                    type="text"
                    className="contact-input-type contact-page w-input"
                    maxLength="256"
                    name="name"
                    data-name="Name"
                    placeholder="Your name*"
                    id="name"
                    required
                  />
                  <input
                    type="email"
                    className="contact-input-type contact-page w-input"
                    maxLength="256"
                    name="email"
                    data-name="Email"
                    placeholder="Email*"
                    id="email"
                    required
                  />
                </div>
                <div className="contact-text-field-divider">
                  <input
                    type="tel"
                    className="contact-input-type contact-page w-input"
                    maxLength="256"
                    name="field"
                    data-name="Field"
                    placeholder="Phone Number*"
                    id="field"
                    required
                  />
                  <input
                    type="text"
                    className="contact-input-type contact-page w-input"
                    maxLength="256"
                    name="field-2"
                    data-name="Field 2"
                    placeholder="City*"
                    id="field-2"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  maxLength="5000"
                  id="field-3"
                  name="field-3"
                  data-name="Field"
                  className="contact-text-area contact-page w-input"
                ></textarea>
                <input
                  type="submit"
                  value="Submit Message"
                  data-wait="Please wait..."
                  className="primary-button w-button"
                />
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
     <div>
      <div className="about-faq-section wf-section">
      <div className="container w-container">
        <div className="w-layout-grid about-faq-grid">
          <div id="w-node-e0e21339-8401-2df2-4a07-a3eb2bbd9949-1d5254ea">
            <div className="about-faq-title-wrap">
              <div className="subtitle-wrap">
                <p className="subtitle">FAQ</p>
                <div className="subtitle-border"></div>
              </div>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="e0e21339-8401-2df2-4a07-a3eb2bbd9951"
              className="faq-wrap w-dropdown"
            >
              <div className="faq-question-wrap w-dropdown-toggle">
                <div
                  
                  className="faq-icon w-icon-dropdown-toggle contact-us-faq"
                ></div>
                <div className="faq-question">
                  What is our standard
                </div>
              </div>
              <nav
                //style="height: 0px; opacity: 0"
                className="faq-answer-wrap w-dropdown-list"
              >
                <div>
                  <p>
                    We operates under country-specific judicial terms. 
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="e0e21339-8401-2df2-4a07-a3eb2bbd995a"
              className="faq-wrap w-dropdown"
            >
              <div className="faq-question-wrap w-dropdown-toggle">
                <div
                 
                  className="faq-icon w-icon-dropdown-toggle contact-us-faq"
                ></div>
                <div className="faq-question">
                Hotels
                </div>
              </div>
              <nav
                //style="height: 0px; opacity: 0"
                className="faq-answer-wrap w-dropdown-list"
              >
                <div>
                  <p>
                  Q: What amenities are available at your hotels?<br />
A: Our hotels offer a range of amenities including comfortable accommodations, dining options, room service, fitness centers, swimming pools, and more. <br />
Q: Can I make reservations online? <br />
A: Yes, you can easily make reservations through our website or by contacting our hotel directly.<br />
Q: Are pets allowed in your hotels?<br />
A: Some of our hotels are pet-friendly. Please check with the specific hotel for their pet policy.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="e0e21339-8401-2df2-4a07-a3eb2bbd9963"
              className="faq-wrap w-dropdown"
            >
              <div className="faq-question-wrap w-dropdown-toggle">
                <div
                  
                  className="faq-icon w-icon-dropdown-toggle contact-us-faq"
                ></div>
                <div className="faq-question">
                Personal Security
                </div>
              </div>
              <nav
                //style="height: 0px; opacity: 0"
                className="faq-answer-wrap w-dropdown-list"
              >
                <div>
                  <p>
                  Q: What services does your personal security division provide?<br />
A: Our personal security division offers a wide range of services such as executive protection, event security, residential security, risk assessments, and security consulting.<br />
Q: Are your security personnel trained professionals?<br />
A: Yes, our security personnel are highly trained professionals with extensive experience in the field of personal security.<br />
Q: Can you provide security services for international travel?<br />
A: Yes, we offer international travel security services to ensure the safety and well-being of our clients wherever they may go.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="e0e21339-8401-2df2-4a07-a3eb2bbd996c"
              className="faq-wrap w-dropdown"
            >
              <div className="faq-question-wrap w-dropdown-toggle">
                <div
                 
                  className="faq-icon w-icon-dropdown-toggle contact-us-faq"
                ></div>
                <div className="faq-question">
                Farms
                </div>
              </div>
              <nav
                //style="height: 0px; opacity: 0"
                className="faq-answer-wrap w-dropdown-list"
              >
                <div>
                  <p>
                  Q: What types of farming activities does your company engage in?<br />
A: Our farms engage in various agricultural activities including crop cultivation, livestock rearing, organic farming, and sustainable farming practices.<br />
Q: Do you offer farm tours or educational programs?<br />
A: Yes, we provide farm tours and educational programs to give visitors insights into modern farming techniques, animal care, and sustainable agriculture.<br />
Q: Are your farm products available for sale?<br />
A: Yes, we offer high-quality farm products for sale, including fresh produce, dairy products, meat, and other farm-related items.<br />
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="e0e21339-8401-2df2-4a07-a3eb2bbd996c"
              className="faq-wrap w-dropdown"
            >
              <div className="faq-question-wrap w-dropdown-toggle">
                <div
                 
                  className="faq-icon w-icon-dropdown-toggle contact-us-faq"
                ></div>
                <div className="faq-question">
                General
                </div>
              </div>
              <nav
                //style="height: 0px; opacity: 0"
                className="faq-answer-wrap w-dropdown-list"
              >
                <div>
                  <p>
                  Q: How can I contact Haybravo Group of Companies?<br />
A: You can reach us through the contact information provided on our website, including phone numbers and email addresses specific to each division.<br />
Q: Are there career opportunities available within your company?<br />
A: Yes, we often have career opportunities across our various divisions. Please visit our Careers page or contact our HR department for more information.<br />
Q: Can I learn more about your company's sustainability initiatives?<br />
A: Absolutely! We are committed to sustainability. You can find information about our sustainability initiatives on our website or by contacting our Sustainability department.
                 </p>
                </div>
              </nav>
            </div>
          </div>
          <div
            id="w-node-e0e21339-8401-2df2-4a07-a3eb2bbd9975-1d5254ea"
            className="faq-contact-block"
          >
            <div className="subtitle-wrap-transparent">
              <div className="subtitle-border"></div>
              <p className="subtitle-dark">Let’s Talk</p>
            </div>
            <h3 className="faq-contact-title">
              You Need Any Help? Get Free Consultation
            </h3>
            <div className="mg-top-20">
              <div className="header-link-card">
                <div className="header-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90acbf62f255cb32898fb_phone-icon-white.svg"
                    loading="lazy"
                    alt="Phone Icon"
                  />
                </div>
                <div>
                  <p className="header-link-text">Have Any Questions</p>
                  <a
                    href="tel:(00)123456789"
                    className="header-link-text hover-yellow"
                    >(00) 123 456 789</a
                  >
                </div>
              </div>
            </div>
            <div className="mg-top-30">
              <a
                data-w-id="e0e21339-8401-2df2-4a07-a3eb2bbd9986"
                href="/contact-us"
                aria-current="page"
                className="yellow-overlay-button w-inline-block w--current"
                ><div>Contact Us</div>
                <div
                  
                  className="yellow-button-hover contact-us-faq"
                ></div
              ></a>
            </div>
            <div className="about-faq-bg">
              <img
                src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63b3c8d9d98188ea895466b8_about-faq-bg-image.jpg"
                loading="lazy"
                width="697"
                sizes="(max-width: 991px) 100vw, 697px"
                alt="Taxi "
                srcset="
                  https://assets.website-files.com/63a43a1633ad3e2a969a6958/63b3c8d9d98188ea895466b8_about-faq-bg-image-p-500.jpg 500w,
                  https://assets.website-files.com/63a43a1633ad3e2a969a6958/63b3c8d9d98188ea895466b8_about-faq-bg-image.jpg       682w
                "
              />
            </div>
          </div>
        </div>
      </div>
      </div>
     </div>
      
      
    </>
  );
};

export default ContactUs;
