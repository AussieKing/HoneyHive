import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import founderImage from "../assets/founder-image.png";
import contactImage from "../assets/contact-image.jpg"; // Import the image used for the contact section

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
            Honey & Hive Interiors - <em>If you can imagine it, it exists.</em>
          </h1>
          <div className="content-with-vision">
            <div className="vision-title">
              <strong className="our-vision-text">OUR VISION</strong>
            </div>
            <div className="text-and-button">
              <p>
                At our core, we are dedicated to meticulously planned and
                harmoniously integrated designs. Whether collaborating with you
                on-site or remotely, our expertise encompasses New Builds,
                Renovations, and Refurbishments in the Residential, Commercial,
                Retail and Hospitality Sector. We consistently prioritise the
                delicate balance of functionality, aesthetics, and each client's
                unique preferences, while adhering to eco-conscious design
                principles. At H&H, we recognise that starting a design project
                can be overwhelming, particularly for those with limited time or
                a clear vision in mind. The thought of orchestrating a team to
                transform your space may feel daunting. Our mission is to
                alleviate this burden, guiding you through the process while
                minimising stress and ensuring an outcome that exceeds your
                expectations. We encourage early involvement, as it allows us to
                attend to every detail. We excel in seamless communication with
                architects, builders, trades and suppliers, diligently bringing
                your creative visions to life.
              </p>
              <Link to="/contact" className="book-consultation-link">
                Book Your Design Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-projects">
        {/* Content for the "Our Projects" section */}
        <p>Our projects content...</p>
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
            <h2>FOUNDER'S NAME</h2>
            <p className="founder-title">Founder + Interior Designer</p>
            <div className="founder-description">
              <p>
                Founder's short bio goes here... Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Quisque quis euismod risus. Donec
                magna arcu, aliquam vel lacus in, tristique finibus neque.
                Vestibulum feugiat diam mi, a vestibulum ipsum viverra
                tincidunt. Praesent a pulvinar orci, in blandit ligula. Fusce
                eget leo pharetra turpis convallis tempor. Integer justo leo,
                fringilla at elit id, maximus tempor ligula. Proin iaculis,
                velit nec consectetur luctus, nulla magna fermentum leo, non
                convallis est arcu eget lorem. Donec sit amet libero id odio
                efficitur elementum. Donec vel dignissim tellus. Phasellus
                ultricies ligula quis neque blandit auctor. Praesent at arcu
                finibus, congue lacus eget, volutpat mauris. Donec vulputate
                accumsan turpis dictum ultricies. Donec interdum velit in lacus
                dictum, ut venenatis odio tristique. Praesent quis est vitae
                justo lobortis interdum.
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

      <div className="about-press">
        {/* Content for the "Our Projects in the Press" section */}
        <p>Our work in the press...</p>
      </div>

      {/* Contact sectiom*/}
      <div className="about-contact">
        <div className="contact-left">
          {/* Display a big bold text for the section title */}
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
