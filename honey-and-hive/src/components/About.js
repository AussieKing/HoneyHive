import React from "react";
import "./About.css"; // Import the stylesheet specific to About

const About = () => {
  return (
    <div>
      <div className="about-hero">
        {/* This div has the fixed background image */}
      </div>
      <div className="about-content-section">
        <h1>
          Thoughtful client-focused interior design, creating beautiful and
          innovative residential and commercial spaces, with sustainability in
          mind.
        </h1>
        {/* Additional content can go here */}
      </div>
      <div className="about-ethos">
        {/* Content for the "Our Ethos" section */}
        <p>Our ethos content goes here...</p>
      </div>
      <div className="about-founders">
        {/* Content for the "Meet the Founders" section */}
        <p>
          I came into this industry of interior design quite organically through
          my avid appreciation for art, history, architecture and my love for
          upcycling and breathing new life into new spaces and reinvigorating
          the old. My strength as a designer and stylist is my inherent ability
          to enhance interiors and create a healthy, balanced and aesthetically
          pleasing environment, whether it be a single room, an entire home, a
          hospitality venue, hotel, apartment complex or commercial dwelling. ​
          I am a bit of a nomad, being that I am Canadian but was born and
          raised in Indonesia. Living a somewhat transient lifestyle, the
          privilege of travel from an early age has enriched my creativity and
          allowed me to draw artistic inspiration from my cultural experiences.
        </p>
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
