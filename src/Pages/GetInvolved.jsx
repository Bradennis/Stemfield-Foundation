import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./GetInvolved.css";

const GetInvolved = () => {
  const location = useLocation();

  const volunteerRef = useRef(null);
  const donateRef = useRef(null);
  const partnerRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#volunteer" && volunteerRef.current) {
      volunteerRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#donate" && donateRef.current) {
      donateRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#partner" && partnerRef.current) {
      partnerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className='get-involved-wrapper'>
      {/* Volunteer Section */}
      <section ref={volunteerRef} id='volunteer' className='involve-section'>
        <h2>Volunteer With Us</h2>
        <p>
          Join our mission by volunteering your time, skills, or expertise. From
          mentoring students to assisting in events, your involvement makes a
          big difference.
        </p>
        <form className='involve-form'>
          <input type='text' placeholder='Full Name' required />
          <input type='email' placeholder='Email Address' required />
          <textarea
            placeholder="Tell us how you'd like to help..."
            required
          ></textarea>
          <button type='submit'>Submit Volunteer Form</button>
        </form>
      </section>

      {/* Partner Section */}
      <section ref={partnerRef} id='partner' className='involve-section'>
        <h2>Partner With Us</h2>
        <p>
          We collaborate with schools, tech companies, and community groups.
          Partnering with us allows you to make meaningful impacts in STEM
          education.
        </p>
        <form className='involve-form'>
          <input type='text' placeholder='Organization Name' required />
          <input type='email' placeholder='Contact Email' required />
          <textarea
            placeholder="Describe how you'd like to partner..."
            required
          ></textarea>
          <button type='submit'>Submit Partnership Inquiry</button>
        </form>
      </section>
    </div>
  );
};

export default GetInvolved;
