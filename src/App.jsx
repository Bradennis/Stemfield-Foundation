import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import logo from "./assets/stemfield.png";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import About from "./Pages/About";
import TeamProfile from "./Pages/TeamProfile";
import OutreachDetail from "./Pages/OutreachDetail";
import Programs from "./Pages/Programs";
import Resources from "./Pages/Resources";
import GetInvolve from "./Pages/Getinvolved";
import Contact from "./Pages/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleDropdown = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  return (
    <Router>
      <div className='app'>
        <header className='header'>
          <nav className='navbar'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>

            <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
              <li className='about-dropdown'>
                <span>
                  <Link to='/' onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </span>
              </li>

              <li className='about-dropdown' style={{ paddingTop: "7px" }}>
                <span onClick={() => toggleDropdown("about")}>About ▾</span>
                <div
                  className={`dropdown-content ${
                    expandedMenu === "about" ? "show" : ""
                  }`}
                >
                  <div className='about-intro'>
                    <p>
                      Learn more about our mission, vision, team, and journey.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <Link
                        to='/about#mission'
                        onClick={() => setMenuOpen(false)}
                      >
                        Mission Statement
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about#vision'
                        onClick={() => setMenuOpen(false)}
                      >
                        Vision Statement
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about#history'
                        onClick={() => setMenuOpen(false)}
                      >
                        History
                      </Link>
                    </li>
                    <li>
                      <Link to='/about#team' onClick={() => setMenuOpen(false)}>
                        Team Members
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='about-dropdown' style={{ paddingTop: "7px" }}>
                <span onClick={() => toggleDropdown("programs")}>
                  Programs ▾
                </span>
                <div
                  className={`dropdown-content ${
                    expandedMenu === "programs" ? "show" : ""
                  }`}
                >
                  <div className='about-intro'>
                    <p>
                      Explore STEM opportunities by age or type. Register for
                      upcoming events.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <Link
                        to='/programs#overview'
                        onClick={() => setMenuOpen(false)}
                      >
                        Programs Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/programs#events'
                        onClick={() => setMenuOpen(false)}
                      >
                        Events Calendar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/programs#apply'
                        onClick={() => setMenuOpen(false)}
                      >
                        Apply/Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='about-dropdown' style={{ paddingTop: "7px" }}>
                <span onClick={() => toggleDropdown("resources")}>
                  Resources ▾
                </span>
                <div
                  className={`dropdown-content ${
                    expandedMenu === "resources" ? "show" : ""
                  }`}
                >
                  <div className='about-intro'>
                    <p>
                      Access articles, videos, and downloadable STEM materials.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <Link
                        to='/resources#articles'
                        onClick={() => setMenuOpen(false)}
                      >
                        Articles
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/resources#videos'
                        onClick={() => setMenuOpen(false)}
                      >
                        Videos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/resources#downloads'
                        onClick={() => setMenuOpen(false)}
                      >
                        Downloadables
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='about-dropdown' style={{ paddingTop: "7px" }}>
                <span onClick={() => toggleDropdown("getinvolved")}>
                  Get Involved ▾
                </span>
                <div
                  className={`dropdown-content ${
                    expandedMenu === "getinvolved" ? "show" : ""
                  }`}
                >
                  <div className='about-intro'>
                    <p>
                      Support the cause by volunteering, donating, or
                      partnering.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <Link
                        to='/get-involved#volunteer'
                        onClick={() => setMenuOpen(false)}
                      >
                        Volunteer Form
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/get-involved#donate'
                        onClick={() => setMenuOpen(false)}
                      >
                        Donate
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/get-involved#partner'
                        onClick={() => setMenuOpen(false)}
                      >
                        Partnership Info
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='about-dropdown'>
                <span>
                  <Link to='/contact' onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </span>
              </li>
            </ul>
          </nav>
        </header>

        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/team/:name' element={<TeamProfile />} />
            <Route path='/outreach/:slug' element={<OutreachDetail />} />
            <Route path='/programs' element={<Programs />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/get-involved' element={<GetInvolved />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className='footer'>
          <div className='footer-section newsletter'>
            <h4>Subscribe to Our Newsletter</h4>
            <p>
              Get the latest STEM updates, events, and resources delivered to
              your inbox.
            </p>
            <form
              className='newsletter-form'
              onSubmit={(e) => e.preventDefault()}
            >
              <input type='email' placeholder='Enter your email' required />
              <button type='submit'>Subscribe</button>
            </form>
          </div>

          <div className='footer-bottom'>
            <p>
              &copy; {new Date().getFullYear()} STEMFIELD Foundation. All rights
              reserved. |
              <span>
                <a href='#'> Contact: info@stemfoundation.org</a>
              </span>
            </p>
            <div className='socials'>
              <a
                href='https://www.facebook.com/profile.php?id=61573730338908'
                aria-label='Facebook'
              >
                <FaFacebookF />
              </a>
              <a
                href='https://x.com/stemfieldFound?t=XYC6EKWyK3bDcjxMVw1WhA&s=09'
                aria-label='Twitter'
              >
                <h4>X</h4>
              </a>
              <a
                href='https://www.linkedin.com/company/stemfield-foundation/'
                aria-label='LinkedIn'
              >
                <FaLinkedinIn />
              </a>

              <a
                href='https://www.instagram.com/stemfield_foundation?igsh=ZjBybXZwb2xsb2Jk'
                aria-label='LinkedIn'
              >
                <FaInstagram />
              </a>

              <a
                href='https://www.tiktok.com/@stemfieldfoundation?_t=ZM-8uSF4DE4Yr7&_r=1'
                aria-label='LinkedIn'
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
