import React from "react";
import "./Portfolio.css";

  
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Sachin | Portfolio</h2>

      <div className="portfolio-card">
        <h3>About Me</h3>
        <p>
          Hi, I am Sachin. I am a BCA student & frontend developer who loves building
          clean, modern and responsive web applications.
        </p>
      </div>

      <div className="portfolio-card">
        <h3>Skills</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React JS</li>
          
        </ul>
      </div>

      <div className="portfolio-card">
        <h3>Projects</h3>
        <ul>
          <li>Hotel Booking Website</li>
          <li>Portfolio Website</li>
        </ul>
      </div>

      <div className="portfolio-card">
        <h3>Contact</h3>
        <p>Email: sachin@email.com</p>
        <p>Mobile: +91 XXXXX XXXXX</p>
      </div>
    </section>
  );
};

export default Portfolio;
