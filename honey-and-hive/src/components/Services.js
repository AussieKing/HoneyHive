import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import servicesBackground from "../assets/services-background.jpg"; 
import contactImage from "../assets/contact-image.jpg"; 
import specialtyImage from "../assets/specialty-image.jpg"; 
import smallerImage from "../assets/smaller-image.jpeg"; 
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
            <h1>Serving <em>Your </em>Vision.</h1>
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

      {/* Footer would be included here */}
    </div>
  );
};

export default Services;
