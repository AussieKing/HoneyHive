import React from "react";
import "./About.css"; // Import the stylesheet specific to About

const About = () => {
  return (
    <div>
      <div className="about-hero">
        {/* This div has the fixed background image */}
      </div>
      <div className="about-content-section">
        <h1>About Honey and Hive Interiors:</h1>
        {/* Additional content can go here */}
      </div>
      <div className="about-ethos">
        {/* Content for the "Our Ethos" section */}
        <p>Our ethos content goes here...</p>
      </div>
      <div className="about-founders">
        {/* Content for the "Meet the Founders" section */}
        <p>Founders content goes here...</p>
      </div>
      <div className="about-press">
        {/* Content for the "Our Projects in the Press" section */}
        <p>Press content goes here...</p>
      </div>
      <div className="about-contact">
        {/* Content for the "Get in Touch" section */}
        <p>Contact content goes here...</p>
      </div>
    </div>
  );
};

export default About;
