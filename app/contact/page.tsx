import React from 'react';
import './Contact.css';  // Import the new CSS file

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h1>Contact Me</h1>
          </div>
          <div className="form-container">
            <form action="https://formspree.io/f/mdkokalp" method="POST">
              <div className="form-grid">
                <div className="form-group">
                  <div className="input-wrapper">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <div className="input-wrapper">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="textarea-field"
                      required
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <button className="submit-button">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
