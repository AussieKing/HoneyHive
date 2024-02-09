import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import founderImage from "../assets/founder-image.jpg";
import contactImage from "../assets/contact-image.jpg";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMoreClick = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about-page">
      <div className="about-hero"></div>
      <div className="about-content-section">
        <div className="about-text-image"></div>
        <div className="about-text-content">
          <h1>
          Crafting Interiors, from Brisbane and Beyond:<p></p> Honey & Hive Interiors - <em>If you can see it, it exists.</em>
          </h1>
          <div className="content-with-vision">
            {/* <div className="vision-title">
              <div className="our-vision-text">OUR ETHOS</div>
            </div> */}
            <div className="text-and-button">
              <p><strong>OUR ETHOS</strong></p>
              <p>
                At our core, we focus on crafting spaces that blend an organic
                feel with sophistication, always aiming for designs that are
                both timeless and meticulously thought-out.
              </p>
              <p>
                Your journey with us, as we transform the interiors of your
                space, be it your home or business, is of utmost importance. We
                pride ourselves on providing a seamless and enjoyable design
                experience, ensuring that any concerns are addressed and every
                option is considered in making your vision a reality. Moreover,
                our efficient process is designed to save you time, allowing you
                to focus on what matters most to you while we handle the
                intricacies of your project.
              </p>
              <p>
                Collaboration is key in our process. We engage closely with you
                to understand your needs and aspirations, combining them with
                our passion for design, technical expertise, and creative
                vision. This fusion brings forth a space that is not only
                functional and aesthetically pleasing but also uniquely yours.
              </p>
              <p>
                We believe that your space is both a canvas and narrative,
                reflecting not only your taste but the journey you’ve taken and
                all you’ve achieved.
              </p>
              <Link to="/contact" className="book-consultation-link">
                Book Your Design Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-founders">
        <div className="founders-left">
          <h1>Meet the mind</h1>
          <h1>
            <em> behind </em>
            <p>Honey and Hive.</p>
          </h1>
        </div>
        <div className="founders-right">
          <img src={founderImage} alt="Founder" className="founder-image" />
          <div className="founder-info">
            <h2>ASHLEY BERINI</h2>
            <p className="founder-title">Founder + Interior Designer</p>
            <div className="founder-description">
              <p>
                Ashley's journey into interior design was profoundly shaped by
                her childhood in Indonesia, where extensive travel, her father's
                passion for antique collecting, and her own love for furniture
                design, up-cycling, and architecture converged. Her university
                years in Canada, culminating in a Science degree in Psychology
                and Winemaking, also saw her organically branching into staging
                and styling for Residential Real Estate.
              </p>
              <p>
                In 2014, a move to Australia to pursue winemaking led to an
                unexpected enrichment of her design perspective, blending
                artistry with scientific precision. This period marked a natural
                and significant shift in her career from a full-time winemaker
                and distributor to a full-time designer, immersing herself in
                the renovation and project management of hospitality venues,
                commercial spaces, and residential homes.
              </p>
              <p>
                Ashley was later appointed to a leadership role as an Interior
                Designer at a renowned Building & Interior Design Firm in
                Brisbane, where she also led the Furniture & Styling team. Her
                diploma in Interior Design, coupled with her practical
                experience, has been instrumental in honing her skills. She has
                successfully combined her diverse experiences, crafting a
                uniquely holistic approach that applies Ethical, Biophilic and
                Feng Shui principles to interior design. Her approach is
                characterised by a harmonious blend of practicality, aesthetic
                elegance, and spatial design that promote well-being.
              </p>
              {readMore && (
                <p>
                  Extended founder's bio goes here... Aenean venenatis magna
                  vitae sem sagittis sollicitudin. Etiam vel euismod nibh. Donec
                  dictum ut justo eu ornare. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Donec malesuada pulvinar orci, in semper felis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Nulla pharetra libero velit. Nunc nunc
                  ante, consectetur vel dui eget, bibendum elementum ex.
                  Phasellus elementum magna quis augue efficitur, mollis aliquam
                  purus bibendum. Maecenas eu ex vitae nibh euismod tristique
                  quis a odio. Aliquam at feugiat nunc. Mauris mattis leo sit
                  amet pellentesque luctus. Vestibulum molestie ante ac neque
                  consequat, non viverra erat tincidunt. Nulla semper imperdiet
                  egestas. Vivamus urna felis, egestas vitae rutrum eget,
                  finibus eget tortor.
                </p>
              )}
              <a onClick={handleReadMoreClick} className="read-more-link">
                {readMore ? "Read Less" : "Read More"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about-press">
        <p>Our work in the press...</p>
      </div> */}

      {/* Contact sectiom*/}
      <div className="about-contact">
        <div className="contact-left">
          <h1>Get In Touch</h1>
          <p>We look forward to chatting about your project.</p>
          <Link to="/contact" className="book-consultation-link">
            Book A Consultation
          </Link>
        </div>
        <div className="contact-right">
          <img
            src={contactImage}
            alt="Consultation"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
