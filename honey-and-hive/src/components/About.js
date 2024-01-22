import React from "react";
import "./About.css"; // Import the stylesheet specific to About

const About = () => {
  return (
    <div>
      <div className="about-hero">
        {/* This div has the fixed background image */}
      </div>
      <div className="about-page">
        <div className="about-content-section">
          <div className="about-text-content">
            <div className="about-image-wrapper"></div> {/* Image container */}
            <div className="about-text">
              <h1>Honey & Hive Interiors - If you can imagine it, it exists.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="about-ethos">
          <h2>Our Ethos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="about-founders">
          <h2>Meet the Founder</h2>
          <p>
            About the Founder: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="about-press">
          <h2>Our Projects in the Press</h2>
          <p>
            Work in the Press: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="about-contact">
          <h2>Get in Touch</h2>
          <p>
            Have a project in mind? We'd love to hear from you. Connect with us to
            discuss how we can bring your interior design dreams to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
