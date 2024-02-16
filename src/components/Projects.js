import React, { useState, useEffect } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import contactImage from "../assets/contact-image.jpg";

const Projects = () => {
  const [projects, setProjects] = useState([]);

 
  useEffect(() => {
    // Fetch the project data from Strapi
    fetch('http://localhost:1337/api/projects?populate=*')
      .then(response => response.json())
      .then(data => {
        // Console log the data to see the structure
        console.log(data);
        // Ensure projects is always an array
        const projectsData = Array.isArray(data.data) ? data.data : [];
        setProjects(projectsData);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);


  return (
    <div className="projects-page">
      {/* Fixed Background Image Container */}
      <div className="fixed-background" />
      
      {/* Title and Projects Container */}
      <div className="content-container">
        <div className="title-container">
          <h1 className="portfolio-title">Portfolio <em>Projects</em></h1>
        </div>
        <div className="projects-container">
          {projects.map((project) => {
            const { attributes } = project;
            // Safely access imageUrl, providing a fallback if mainImage is not available
            const imageUrl = attributes.mainImage?.data?.attributes?.url ? `http://localhost:1337${attributes.mainImage.data.attributes.url}` : '';
            return (
              <div className="project-item" key={project.id}>
                <div className="project-image-container">
                  <img src={imageUrl} alt={attributes.title} />
                  <Link to={`/projects/${attributes.slug}`}>
                    <div className="project-hover-overlay">
                      <h1>View<em> Project</em></h1>
                    </div>
                  </Link>
                </div>
                <p className="project-title">{attributes.title}</p>
              </div>
            );
          })}
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
            <img src={contactImage} alt="Consultation" className="contact-image" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Projects;