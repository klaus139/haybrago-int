import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f40lvtq', 'template_zt5t7rg', form.current, 'p-tbLsuhs8gF_oSdT')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-section wf-section">
      <div className="container w-container">
        <div className="w-layout-grid contact-grid">
          <div id="w-node-_8c82d05d-0ea1-2777-7b50-7ed99d0c6187-42f829bf">
            <div className="subtitle-wrap-transparent">
              <p className="subtitle-dark">Contact</p>
              <div className="subtitle-border"></div>
            </div>
            <h2 className="section-title text-white">Get in touch with us</h2>
            <p className="text-white">
              We appreciate your interest please complete the form below and we
              will contact you immediately to discuss your warehousing and
              distribution, air, ocean freight or any other logistics needs.
            </p>
            <div
              data-w-id="59283b6b-b8f7-72b7-b2f7-e2515c66b753"
              //style={{ opacity: 0 }}
              className="home-contact-link-wrap"
            >
              <div className="header-link-card">
                <div className="header-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63a4416ecc9a622b68fc40b2_mail-icon.png"
                    loading="lazy"
                    alt="Mail Icon"
                  />
                </div>
                <div>
                  <p className="header-link-text">Email</p>
                  <a
                    href="mailto:contact@transitflow.com"
                    className="header-link-text hover-yellow"
                  >
                   haybravointernational@gmail
                  </a>
                </div>
              </div>
              <div className="header-link-card">
                <div className="header-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63a4417904383d0d539ac57b_Phone-icon.png"
                    loading="lazy"
                    alt="Phone Icon"
                  />
                </div>
                <div>
                  <p className="header-link-text">Call Us</p>
                  <a
                    href="tel:(00)123456789"
                    className="header-link-text hover-yellow"
                  >
                    (+234) 803 358 6496
                  </a>
                </div>
              </div>
              <div className="header-link-card">
                <div className="header-icon-wrap">
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63a43d2bd004d0a80d725af2_clock-icon.png"
                    loading="lazy"
                    alt="Clock Icon"
                  />
                </div>
                <div>
                  <p className="header-link-text">Mon - Sat 9.00 - 18.00 Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-ea9e92ac-2b03-b12c-9f0b-98de4c521332-42f829bf">
          <div className="w-form">
      <form
        method="get"
        name="email-form"
        data-name="Email Form"
        //style={{ opacity: 0 }}
        data-w-id="7ce10f7b-78a2-c027-bbec-c5925ddcd9cc"
        id="email-form"
        className="contact-form"
        data-wf-page-id="63a57e9a6bba275742f829bf"
        data-wf-element-id="7ce10f7b-78a2-c027-bbec-c5925ddcd9cc"
        ref={form} onSubmit={sendEmail}
      >
        <div className="contact-text-field-divider">
          <input
            type="text"
            className="contact-input-type w-input"
            maxLength="256"
            name="name"
            data-name="Name"
            placeholder="Your Name*"
            id="name"
          />
          <input
            type="email"
            className="contact-input-type w-input"
            maxLength="256"
            name="email"
            data-name="Email"
            placeholder="Your Email*"
            id="email"
            required
          />
        </div>
        <div className="contact-text-field-divider">
          <input
            type="text"
            className="contact-input-type w-input"
            maxLength="256"
            name="field"
            data-name="Field"
            placeholder="Phone Number*"
            id="field"
            required
          />
          <input
            type="text"
            className="contact-input-type w-input"
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
          data-name="field"
          className="contact-text-area w-input"
        ></textarea>
        <input
          type="submit"
          value="Send"
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
      </div>
    );
  };
  
  export default ContactSection;
  
