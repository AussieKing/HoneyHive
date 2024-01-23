import React from "react";
import "./About.css"; // Import the stylesheet specific to About
import { Link } from "react-router-dom"; //! introduced instead of the book button

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        {/* This div has the fixed background image */}
      </div>
      <div className="about-content-section">
        <div className="about-text-image"></div>{" "}
        {/* This is the image on the left */}
        <div className="about-text-content">
          <h1>
            Honey & Hive Interiors - <em>If you can imagine it, it exists.</em>
          </h1>
          <div className="content-with-vision">
            <div className="vision-title">
              <strong className="our-vision-text">OUR VISION</strong>
            </div>
            <div className="text-and-button">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/contact" className="book-consultation-link">
                Book Your Design Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-ethos">
        {/* Content for the "Our Ethos" section */}
        <p>Our ethos content...</p>
      </div>
      <div className="about-projects">
        {/* Content for the "Our Projects" section */}
        <p>Our projects content...</p>
      </div>
      <div className="about-founders">
        {/* Content for the "Meet the Founders" section */}
        <p>Meet the founders behind Honey and Hive...</p>
      </div>
      <div className="about-press">
        {/* Content for the "Our Projects in the Press" section */}
        <p>Our work in the press...</p>
      </div>
      <div className="about-contact">
        {/* Content for the "Get in Touch" section */}
        <p>Contact us...</p>
      </div>
    </div>
  );
};

export default About;
