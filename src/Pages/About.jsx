import React, { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import "./About.css";
import teamProfiles from "../data/teamData";
import { outreachActivities } from "../data/outreachData";

import stemabout1 from "../assets/stemfieldabout1.jpg";
import stemabout2 from "../assets/stemfieldnews1.jpg";
import stemmission from "../assets/stemfieldmission.jpg";
import { FaArrowRight } from "react-icons/fa";

const teamMembers = Object.entries(teamProfiles).map(([name, data]) => ({
  name,
  ...data,
}));

const About = () => {
  const location = useLocation();

  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const historyRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#mission" && missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#vision" && visionRef.current) {
      visionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#history" && historyRef.current) {
      historyRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#team" && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className='about-page'>
      <section className='hero-gradient-right'>
        <div className='hero-gradient-content'>
          <h1>About Us</h1>
          <p>
            STEMFIELD (STEM for Innovation, Entrepreneurship, Leadership, and
            Development) Foundation is a non-profit dedicated to promoting STEM
            education through outreaches, science fairs, and hands-on learning.
            We inspire curiosity, creativity, and innovation to empower the next
            generation of problem-solvers.
          </p>
        </div>
      </section>

      <section className='about-section' ref={missionRef} id='mission'>
        <div className='container section-flex'>
          <div className='text-content'>
            <h2>Our Mission</h2>
            <p>
              At STEMFIELD, our mission is to inspire and empower young minds to
              pursue careers in STEM. We aim to foster critical thinking,
              problem-solving, and an entrepreneurial spirit, shaping the
              industrious leaders of tomorrow.
            </p>
          </div>
          <div className='image-content'>
            <img src={stemabout2} alt='Mission illustration' />
          </div>
        </div>
      </section>

      <section className='about-section' ref={visionRef} id='vision'>
        <div className='container section-flex reverse'>
          <div className='text-content'>
            <h2>Our Vision</h2>
            <p>
              Our vision is to create a world where every young person has
              access to hands-on STEM education, driving innovation and solving
              real-world challenges. We aspire to build a community of
              passionate young scientists and enthusiasts ready to make
              meaningful contributions to society.
            </p>
          </div>
          <div className='image-content'>
            <img src={stemabout1} alt='Vision illustration' />
          </div>
        </div>
      </section>

      <section
        className='about-section impact-section'
        ref={historyRef}
        id='history'
      >
        <div className='container'>
          <h2>Our Impact</h2>
          <p>
            Since our founding in 2015, STEMFIELD has directly impacted over
            10,000 students through STEM outreach programs, mobile science labs,
            national competitions, mentorships, and teacher training workshops.
            From urban cities to underserved communities, we are breaking
            barriers in STEM accessibility.
          </p>

          <div className='history-grid'>
            {outreachActivities.map((activity, index) => (
              <div className='history-item' key={index}>
                <img src={activity.image} alt={activity.title} />
                <div className='overlay'>
                  <h4>{activity.title}</h4>
                  <Link
                    to={`/outreach/${activity.slug}`}
                    className='overlay-link'
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='about-section community-polished'>
        <div className='container'>
          <h2>Get Involved</h2>
          <p className='section-subtitle'>
            At STEMFIELD, we believe in the power of community. Join us as we
            inspire and shape the next generation of STEM leaders.
          </p>

          <div className='engagement-cards'>
            <div className='engage-card'>
              <div className='icon-circle'>👥</div>
              <h3>Volunteer</h3>
              <p>
                Lead STEM clubs, mentor students, or support events in your
                region.
              </p>
              <Link to='/get-involved#volunteer' className='cta-btn small'>
                Join the Team
              </Link>
            </div>

            <div className='engage-card'>
              <div className='icon-circle'>🤝</div>
              <h3>Partner</h3>
              <p>
                Collaborate with us to extend STEM education in underserved
                areas.
              </p>
              <Link to='/get-involved#partner' className='cta-btn small'>
                Become a Partner
              </Link>
            </div>

            <div className='engage-card'>
              <div className='icon-circle'>💡</div>
              <h3>Donate</h3>
              <p>
                Support our mission with tools, training materials, and mobile
                labs.
              </p>
              <Link to='/get-involved#donate' className='cta-btn small'>
                Give Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='about-section team' ref={teamRef} id='team'>
        <div className='container'>
          <h2>Meet Our Team</h2>
          <p className='team-note'>
            Our team is a diverse group of educators, scientists, and community
            advocates passionate about empowering the next generation. United by
            our vision, we drive change from classrooms to communities.
          </p>
          <div className='team-grid'>
            {teamMembers.map((member, index) => (
              <Link
                to={`/team/${encodeURIComponent(member.name)}`}
                key={index}
                className='team-member'
              >
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <p className='quote'>“{member.quote}”</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
