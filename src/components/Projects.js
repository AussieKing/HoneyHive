import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { projectsData } from './projectsData'; 
import contactImage from "../assets/contact-image.jpg";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="fixed-background" />
      <div className="content-container">
        <div className="title-container">
          <h1 className="portfolio-title">Portfolio <em>Projects</em></h1>
        </div>
        <div className="projects-container">
          {projectsData.map((project, index) => {
            const imageUrl = project.backgroundImage?.url || ""; 
            return (
              <div className="project-item" key={index}>
                <div className="project-image-container">
                  <img src={imageUrl} alt={project.title} />
                  <Link to={`/projects/${project.slug}`}>
                    <div className="project-hover-overlay">
                      <h1>View<em> Project</em></h1>
                    </div>
                  </Link>
                </div>
                <p className="project-title">{project.title}</p>
              </div>
            );
          })}
        </div>
        <div className="about-contact">
          <div className="contact-left">
            <h1>Get In Touch</h1>
            <p>We look forward to chatting about your project.</p>
            <Link to="/contact" className="book-consultation-link">Book A Consultation</Link>
          </div>
          <div className="contact-right">
            <img src={contactImage} alt="Consultation" className="contact-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
