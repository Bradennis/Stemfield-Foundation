import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Programs.css";

const Programs = () => {
  const location = useLocation();

  const overviewRef = useRef(null);
  const eventsRef = useRef(null);
  const applyRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#overview" && overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#events" && eventsRef.current) {
      eventsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#apply" && applyRef.current) {
      applyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className='programs-wrapper'>
      {/* Programs Overview Section */}
      <section ref={overviewRef} id='overview' className='programs-section'>
        <h2 className='section-title'>Programs Overview</h2>
        <p className='section-description'>
          At STEMFIELD, we provide hands-on, inclusive, and future-forward
          programs tailored for young innovators, educators, and schools. Each
          program is designed to build real-world STEM skills while fostering
          curiosity, creativity, and critical thinking.
        </p>

        <div className='program-grid'>
          <div className='program-card'>
            <h4>🚀 STEM Bootcamps</h4>
            <p>
              Immersive learning experiences in coding, robotics, and AI for
              students and educators across all levels.
            </p>
          </div>
          <div className='program-card'>
            <h4>💡 Tech4Teens</h4>
            <p>
              After-school mentorship programs that help teens explore tech
              careers and develop practical digital skills.
            </p>
          </div>
          <div className='program-card'>
            <h4>🏫 STEM for Schools</h4>
            <p>
              Collaborating with schools to integrate innovative STEM modules
              and teacher training workshops into the curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section ref={eventsRef} id='events' className='programs-section'>
        <h2 className='section-title'>Events Calendar</h2>
        <p className='section-description'>
          Mark your calendar with these exciting opportunities to engage with
          our STEM community. Attend, showcase, or support our mission through
          these enriching events.
        </p>

        <ul className='event-list'>
          <li>
            <strong>July 12, 2025:</strong> STEM Bootcamp – Intro to AI &
            Robotics
          </li>
          <li>
            <strong>August 5, 2025:</strong> National Science Fair – Regional
            Showcase
          </li>
          <li>
            <strong>September 3, 2025:</strong> Girls in STEM – Hackathon
            Challenge
          </li>
          <li>
            <strong>October 20, 2025:</strong> STEMFIELD Annual Educators Summit
          </li>
        </ul>
      </section>

      {/* Apply/Register Section */}
      <section ref={applyRef} id='apply' className='programs-section'>
        <h2 className='section-title'>Apply or Register</h2>
        <p className='section-description'>
          Ready to join the movement? Apply to be part of one of our featured
          STEM programs or register your school for a collaboration. Let’s build
          a future powered by knowledge and innovation.
        </p>

        <form className='apply-form' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='Full Name' required />
          <input type='email' placeholder='Email Address' required />
          <select required>
            <option value=''>Select a Program</option>
            <option value='bootcamp'>STEM Bootcamp</option>
            <option value='teens'>Tech4Teens</option>
            <option value='schools'>STEM for Schools</option>
          </select>
          <textarea
            placeholder='Tell us why you’re interested...'
            rows='4'
          ></textarea>
          <button type='submit'>Submit Application</button>
        </form>
      </section>
    </div>
  );
};

export default Programs;
