import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import stemfield3 from "../assets/stemfield3.jpg";
import stemnews from "../assets/stemfieldnews.webp";
import stemnews1 from "../assets/stemfieldnews1.jpg";
import stemnews2 from "../assets/stemnews2.webp";
import outreach8 from "../assets/outreach8.jpg";
import labImage from "../assets/lab.jpg";
import workshopImage from "../assets/workshop.jpg";
import challengeImage from "../assets/challenge.jpg";
import teamImage from "../assets/team.jpg";
import missionImage from "../assets/mission.jpg";

const items = [
  {
    type: "news",
    title: "Maydm expands STEM impact in Wisconsin",
    date: "Jun 20, 2025",
    description:
      "Maydm continues to change the face of STEM by expanding its programs for youth of color in Wisconsin.",
    image: stemfield3,
    link: "https://madison365.com/maydm-continues-to-change-the-face-of-stem-expand-its-impact-in-wisconsin/",
  },
  {
    type: "news",
    title: "COVA STEM Hub awards nearly $300K in grants",
    date: "Jun 18, 2025",
    description:
      "Newport News STEM hub awarded $295K to support STEM learning across Coastal Virginia.",
    image: stemnews,
    link: "https://www.newportnewsdaily.com/p/newport-news-led-coastal-virginia-stem-hub-awards-grants",
  },
  {
    type: "event",
    title: "🚀 STEM Bootcamp",
    date: "July 12, 2025",
    description:
      "Explore robotics and coding in an engaging bootcamp for students.",
    image: stemnews1,
  },
  {
    type: "news",
    title: "Girls Who Code launches summer immersion",
    date: "Jun 10, 2025",
    description:
      "Girls Who Code’s summer program aims to bridge the gender gap in tech.",
    image: stemnews2,
    link: "https://girlswhocode.com/programs/summer-immersion-program",
  },
  {
    type: "event",
    title: "🔬 Science Fair 2025",
    date: "August 5, 2025",
    description:
      "A platform for young minds to showcase innovative STEM projects.",
    image: stemnews1,
  },
];

const heroSlides = [
  {
    title:
      "Empowering the Next Generation of Scientists, Innovators, and Leaders",
    description: `At STEMFIELD Foundation, we are redefining science education in Ghana. Through immersive, hands-on STEM programs, we equip students in underserved communities with the tools, skills, and mindset to thrive in a technology-driven world.`,
    image: outreach8,
  },
  {
    title: "Empowering Girls and Advancing Gender Equality in STEM",
    description: `STEMFIELD Foundation is committed to breaking gender barriers in science and technology. By creating inclusive learning environments and tailored programs, we inspire young girls to explore STEM subjects with confidence and curiosity, fostering a future where both girls and boys thrive equally in innovation.`,
    image: stemnews1,
  },
  {
    title: "Fostering Innovation Through Infrastructure and Industry",
    description: `We believe that sustainable development starts with nurturing innovators. STEMFIELD Foundation supports grassroots problem-solvers by providing platforms like science fairs and innovation challenges, building a foundation of resilience, creativity, and technical skills essential for national development.`,
    image: stemnews,
  },
  {
    title: "Bridging Gaps and Reducing Educational Inequality",
    description: `Our mission is rooted in the belief that quality STEM education should not be limited by geography or socioeconomic status. STEMFIELD Foundation reaches underserved schools and rural communities, delivering impactful programs that empower all students to achieve their full potential.`,
    image: stemnews1,
  },
  {
    title: "Uniting Forces Through Strategic Partnerships for Impact",
    description: `Real change is only possible through collaboration. At STEMFIELD Foundation, we cultivate strong partnerships with educators, institutions, and volunteers. Together, we amplify our reach, deepen our impact, and accelerate progress toward sustainable development goals across Ghana and beyond.`,
    image: stemnews2,
  },
];

const Home = () => {
  const [openItem, setOpenItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); // change every 15 seconds
    return () => clearInterval(interval);
  }, []);

  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const frame = useRef();

    useEffect(() => {
      let start = 0;
      const startTime = performance.now();

      const animate = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          frame.current = requestAnimationFrame(animate);
        }
      };

      frame.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame.current);
    }, [end, duration]);

    return count;
  };

  const schools = useCounter(35);
  const volunteers = useCounter(20);
  const students = useCounter(3000);
  const labs = useCounter(1);

  const carouselRef = useRef();

  const scrollCarousel = (direction) => {
    const scrollAmount = 350;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const current = heroSlides[currentSlide];

  return (
    <div className='home'>
      {/* Hero Banner */}
      <section className='hero'>
        <div
          className='hero-bg'
          style={{ backgroundImage: `url(${current.image})` }}
        ></div>
        <div className='hero-mask'></div>
        <div className='hero-content'>
          <h2>{current.title}</h2>
          <p>{current.description}</p>
          <div className='hero-buttons'>
            <button className='cta-button'>Get Involved</button>
            <button className='cta-button-outline'>Donate</button>
          </div>
        </div>
      </section>

      {/* Impact At a Glance */}
      <section className='impact'>
        <h3 className='section-title'>Impact at a Glance</h3>
        <p className='impact-intro'>
          Since our inception, STEMFIELD Foundation has brought transformative
          STEM learning experiences to classrooms across Ghana:
        </p>

        <div className='impact-grid'>
          <div className='impact-card'>
            <div className='impact-icon-box'>
              <span className='impact-icon'>📍</span>
            </div>
            <div className='impact-bar' />
            <h4 className='impact-count'>{schools}+</h4>
            <p className='impact-label'>Schools Reached</p>
          </div>

          <div className='impact-card'>
            <div className='impact-icon-box'>
              <span className='impact-icon'>👩🏾‍🔬</span>
            </div>
            <div className='impact-bar' />
            <h4 className='impact-count'>{volunteers}+</h4>
            <p className='impact-label'>Dedicated Volunteers</p>
          </div>

          <div className='impact-card'>
            <div className='impact-icon-box'>
              <span className='impact-icon'>🧪</span>
            </div>
            <div className='impact-bar' />
            <h4 className='impact-count'>{students.toLocaleString()}+</h4>
            <p className='impact-label'>Students Engaged</p>
          </div>

          <div className='impact-card'>
            <div className='impact-icon-box'>
              <span className='impact-icon'>🚐</span>
            </div>
            <div className='impact-bar' />
            <h4 className='impact-count'>{labs}</h4>
            <p className='impact-label'>Mobile Science Lab</p>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className='our-work'>
        <h3 className='section-title'>Our Work</h3>
        <p className='section-subtitle'>
          Delivering World-Class STEM Education Where It’s Needed Most
        </p>
        <p className='our-work-description'>
          We believe that access to quality science education is a right, not a
          privilege. Our initiatives are designed to inspire curiosity, nurture
          problem-solving, and ignite a passion for STEM among students and
          educators alike:
        </p>

        <div className='work-grid'>
          <div className='work-card'>
            <img
              src={labImage}
              alt='Mobile Science Lab'
              className='work-image'
            />
            <div className='work-card-content'>
              <h4>Mobile Science Lab</h4>
              <p>
                Bringing real-world lab experiences directly to under-resourced
                schools across Ghana.
              </p>
            </div>
          </div>

          <div className='work-card'>
            <img
              src={workshopImage}
              alt='STEM Workshops'
              className='work-image'
            />
            <div className='work-card-content'>
              <h4>STEM Workshops</h4>
              <p>
                Delivering hands-on training in robotics, electronics, coding,
                and scientific experimentation.
              </p>
            </div>
          </div>

          <div className='work-card'>
            <img
              src={challengeImage}
              alt='Innovation Challenges'
              className='work-image'
            />
            <div className='work-card-content'>
              <h4>Innovation Challenges</h4>
              <p>
                Hosting science fairs, competitions, and ideation labs to fuel
                creativity and collaboration.
              </p>
            </div>
          </div>
        </div>

        <button className='cta-button'>Explore Our Programs</button>
      </section>

      {/* Who We Are */}
      <section className='who-we-are'>
        <div className='section-content split'>
          <div className='split-image'>
            <img src={teamImage} alt='Our Team' />
          </div>
          <div className='split-text'>
            <h3>Who We Are</h3>
            <p>
              STEMFIELD Foundation was founded by a collective of scientists,
              educators, and changemakers who share a common vision: a Ghana
              where every child, regardless of background, has the opportunity
              to explore, question, and lead through science. From humble
              beginnings, we have built a fast-growing movement that blends
              outreach, mentorship, and innovation to bridge the STEM gap.
            </p>
            <button className='cta-button-outline'>Learn More About Us</button>
          </div>
        </div>
      </section>

      {/* Events & News Section */}
      <section className='events-news'>
        <h3>Events & News Highlights</h3>
        <p className='events-intro'>
          Discover our latest events and STEM stories.
        </p>

        <div className='carousel-container'>
          <button
            className='carousel-btn left'
            onClick={() => scrollCarousel("left")}
          >
            &#8249;
          </button>

          <div className='scroll-wrapper' ref={carouselRef}>
            <div className='scroll-track'>
              {items.map((item, i) => (
                <div key={i} className='news-card'>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className='news-image'
                    />
                  )}
                  <div className='news-content'>
                    <h4>{item.title}</h4>
                    <p className='news-date'>
                      <strong>
                        {item.type === "event" ? "Date" : "Posted"}:
                      </strong>{" "}
                      {item.date}
                    </p>
                    <p className='news-desc'>{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        className='read-more-link'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Read Full Article →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className='carousel-btn right'
            onClick={() => scrollCarousel("right")}
          >
            &#8250;
          </button>
        </div>
      </section>

      {/* Join the Mission */}
      <section className='join-mission'>
        <div className='section-content split reverse'>
          <div className='split-image'>
            <img src={missionImage} alt='Join the Mission' />
          </div>
          <div className='split-text'>
            <h3>Fueling Futures Through Science</h3>
            <p>
              Ghana’s brightest minds are waiting to be discovered — they just
              need the tools to shine. Join us as a volunteer, partner, or donor
              and help expand the reach of our mobile lab and outreach programs.
              Together, we can unlock the next generation of scientists,
              innovators, and problem-solvers.
            </p>
            <div className='hero-buttons'>
              <button className='cta-button'>Partner With Us</button>
              <button className='cta-button-outline'>Support Our Work</button>
            </div>
          </div>
        </div>
      </section>

      {/* Voices from the Field */}
      <section className='testimonials'>
        <h3 className='section-title'>Voices from the Field</h3>
        <p className='testimonials-intro'>
          Hear what students and educators have to say about the impact of
          STEMFIELD Foundation.
        </p>

        <div className='testimonials-grid'>
          <div className='testimonial-card'>
            <p className='testimonial-text'>
              “Before STEMFIELD came, science was just theory. Now, I want to
              become a biomedical engineer.”
            </p>
            <div className='testimonial-meta'>
              <strong>Ama</strong>
              <span>Class 6 Student, Kumasi</span>
            </div>
          </div>

          <div className='testimonial-card'>
            <p className='testimonial-text'>
              “The students were amazed. For most of them, it was their first
              time using real lab tools. This is what science should look like.”
            </p>
            <div className='testimonial-meta'>
              <strong>Mr. Adjei</strong>
              <span>Science Teacher, Ashanti Region</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
