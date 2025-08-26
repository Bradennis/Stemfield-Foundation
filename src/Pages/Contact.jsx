import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-container'>
        <div className='contact-info'>
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you! Whether you're interested in our
            programs, have a question, or want to collaborate, drop us a
            message.
          </p>
          <div className='contact-details'>
            <p>
              <strong>Email:</strong> info@stemfieldfoundation.org
            </p>
            <p>
              <strong>Phone:</strong> +233 20 123 4567
            </p>
            <p>
              <strong>Location:</strong> Kumasi, Ghana
            </p>
          </div>
        </div>

        <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
          <h3>Contact Form</h3>
          <input type='text' placeholder='Full Name' required />
          <input type='email' placeholder='Email Address' required />
          <input type='text' placeholder='Subject' required />
          <textarea placeholder='Your Message' rows='5' required />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
