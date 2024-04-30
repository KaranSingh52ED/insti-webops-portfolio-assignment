import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h1>Contact Me</h1>
        <p>
          Want to have amazing projects! Hit me up
          <i class="fa-regular fa-hand-point-down"></i>
        </p>
        <div className="contact-info">
          <div className="contact-details">
            <img src="assets/email.png" />
            <a href="mailto:karansingh999703@gmail.com">
              karansingh999703@gmail.com
            </a>
            <p>+91-7088474701</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
