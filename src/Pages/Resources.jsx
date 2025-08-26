import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Resources.css";

const articles = [
  {
    title: "Why STEM Education Matters",
    summary:
      "Discover how STEM shapes critical thinking and problem-solving for the future.",
    link: "https://www.edutopia.org/article/why-stem-important-education",
  },
  {
    title: "STEM Careers of the Future",
    summary:
      "Explore careers that will define the next generation of technology and science.",
    link: "https://www.bls.gov/careeroutlook/2021/article/stem-jobs.htm",
  },
];

const videos = [
  {
    title: "Introduction to AI",
    url: "https://www.youtube.com/embed/2ePf9rue1Ao",
  },
  {
    title: "The Power of STEM Education",
    url: "https://www.youtube.com/embed/QMQ3rzc4QYo",
  },
];

const downloads = [
  {
    title: "Beginner's Guide to Python Programming",
    file: "/assets/python_guide.pdf",
  },
  {
    title: "Science Project Ideas for Students",
    file: "/assets/science_projects.pdf",
  },
];

const Resources = () => {
  const location = useLocation();
  const articlesRef = useRef(null);
  const videosRef = useRef(null);
  const downloadsRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#articles" && articlesRef.current) {
      articlesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#videos" && videosRef.current) {
      videosRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#downloads" && downloadsRef.current) {
      downloadsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className='resources-wrapper'>
      {/* Articles */}
      <section ref={articlesRef} id='articles' className='resources-section'>
        <h2 className='section-title'>Articles</h2>
        <div className='article-list'>
          {articles.map((article, index) => (
            <div className='resource-card' key={index}>
              <h4>{article.title}</h4>
              <p>{article.summary}</p>
              <a
                href={article.link}
                target='_blank'
                rel='noopener noreferrer'
                className='resource-link'
              >
                Read Article →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section ref={videosRef} id='videos' className='resources-section'>
        <h2 className='section-title'>Videos</h2>
        <div className='video-grid'>
          {videos.map((video, index) => (
            <div className='video-container' key={index}>
              <iframe
                src={video.url}
                title={video.title}
                allowFullScreen
                frameBorder='0'
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadables */}
      <section ref={downloadsRef} id='downloads' className='resources-section'>
        <h2 className='section-title'>Downloadable Resources</h2>
        <div className='download-list'>
          {downloads.map((item, index) => (
            <div className='resource-card' key={index}>
              <h4>{item.title}</h4>
              <a href={item.file} download className='resource-link'>
                Download PDF ↓
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
