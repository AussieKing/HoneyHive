import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import servicesBackground from "../assets/services-background.jpg";
import contactImage from "../assets/contact-image.jpg";
import specialtyImage from "../assets/specialty-image.jpg";
import smallerImage from "../assets/smaller-image.jpeg";
import horizontalImage from "../assets/services-horizontal.jpg"; // Import the new image
import designPhases from "../assets/design-phases.jpg"; // Import the new image

const Services = () => {
  return (
    <div className="services-page">
      <div
        className="services-hero"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      >
        {/* Semi-transparent overlay that allows the fixed background to be visible */}
        <div className="background-overlay"></div>
      </div>

      {/* Content that scrolls over the background */}
      <div className="services-overlay">
        <div className="services-hero-content">
          <div className="services-image-container">
            <img
              src={specialtyImage}
              alt="Specialty"
              className="services-specialty-image"
            />
          </div>
          <div className="services-hero-text">
            <h1>
              Serving <em>Your </em>Vision.
            </h1>
          </div>
        </div>
        <div className="services-subcontent">
          <div className="title-div">
            <h2>OUR SPECIALTIES</h2>
            <div className="services-specialties-list">
              <p>RESIDENTIAL DESIGN</p>
              <p>RETAIL DESIGN</p>
              <p>HOSPITALITY DESIGN</p>
            </div>
          </div>
          <div className="title-div">
            <h2>OUR MISSION </h2>
            <p>
              At our core, we are dedicated to meticulously planned and
              harmoniously integrated designs. Whether collaborating with you
              on-site or remotely, our expertise encompasses New Builds,
              Renovations, and Refurbishments in the Residential, Commercial,
              Retail and Hospitality Sector. Our mission is to provide
              personalised interior design solutions that offer exceptional
              value. We are dedicated to exceeding expectations in both quality
              and service, ensuring a seamless and stress-free experience that
              saves you time
            </p>
          </div>
          <div className="services-aligned-image">
            <img src={smallerImage} alt="Aligned Specialty" />
          </div>
        </div>

        {/* The new container */}
        {/* <div className="services-content-wrapper">
          <div className="services-image-half">
            <img
              src={horizontalImage}
              alt="Descriptive Alt Text"
              className="services-horizontal-image"
            />
          </div>
          <div className="services-text-half">
            <div className="services-title">
              <h2>WHAT WE DO</h2>
            </div>
            <div className="services-description">
              <p>
                Detail the services offered here. Explain the nature of the
                projects, the approach taken by your company, and how you
                differentiate yourself from the competition.
              </p>
              <Link to="/contact" className="book-consultation-link">
                Book A Consultation
              </Link>
            </div>
          </div>
        </div> */}
        <div className="services-content-wrapper">
  <div className="services-image-half">
    <img src={horizontalImage} alt="Descriptive Alt Text" className="services-horizontal-image" />
  </div>
  <div className="services-text-half">
    <div className="services-title">
      <h2>WHAT WE DO</h2>
    </div>
    <div className="services-description">
      <p>
        Detail the services offered here. Explain the nature of the
        projects, the approach taken by your company, and how you
        differentiate yourself from the competition.
      </p>
      <Link to="/contact" className="book-consultation-link">
        Book A Consultation
      </Link>
    </div>
  </div>
</div>


        {/* New Design phases section */}
        <div className="interior-design-section">
          <div className="interior-design-text">
            <h1>Interior Design</h1>
            <p>
              The Honey & Hive design process can be broken down into distinct
              phases.
            </p>
            <div className="interior-design-phases">
              <div className="phase-container">
                <h2>PHASE ZERO</h2>
                <div>
                  <p>INITIAL CONSULTATION</p>
                  <p>Description for Phase Zero...</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE ONE</h2>
                <div>
                  <p>CONCEPT DESIGN</p>
                  <p>Description for Phase One...</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE TWO</h2>
                <div>
                  <p>DESIGN DEVELOPMENT</p>
                  <p>Description for Phase Two...</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE THREE</h2>
                <div>
                  <p>DESIGN DOCUMENTATION</p>
                  <p>Description for Phase Three...</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE FOUR</h2>
                <div>
                  <p>CONSTRUCTION</p>
                  <p>Description for Phase Four...</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE FIVE</h2>
                <div>
                  <p>FURNITURE & STYLING</p>
                  <p>Description for Phase Five...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="interior-design-image">
            <img src={designPhases} alt="Interior Design" />
          </div>
        </div>

        <div className="projects-section">
          <div className="projects-header">
            <h1>Portfolio Projects</h1>
            <Link to="/projects" className="view-all-projects-link">
              View All Projects
            </Link>
          </div>
          {/* Horizontal image carousel */}
        </div>

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
    </div>
  );
};

export default Services;
