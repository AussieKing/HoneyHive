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
        // Set the projects, adjust according to the received data structure
        setProjects(data.data);
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
            const imageUrl = attributes.mainImage.data ? `http://localhost:1337${attributes.mainImage.data.attributes.url}` : '';
            return (
              <div className="project-item" key={project.id}>
                <div className="project-image-container">
                  {/* Update the image source to use the URL from Strapi */}
                  <img src={imageUrl} alt={attributes.title} />
                  <div className="project-hover-overlay">
                    <h1>View<em> Project</em></h1>
                  </div>
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

export default Projects;





// import React from "react";
// import "./Projects.css";
// import { Link } from "react-router-dom";
// import contactImage from "../assets/contact-image.jpg";

// import figLoungeImage from "../assets/wbay-fig-4.jpg";
// import hepburnsImage from "../assets/hepburns-1.jpg";
// import managersQuartersImage from "../assets/m-quarters-7.jpg";
// import grapeTherapyImage from "../assets/grape-therapy-1.jpg";
// import proudHenryImage from "../assets/proud-henry-1.jpg";
// import doReMiImage from "../assets/doremi-1.jpg";

// const projectData = [
//   { title: "Fig Lounge", image: figLoungeImage, category: "COMMERCIAL" },
//   { title: "Hepburn’s", image: hepburnsImage, category: "COMMERCIAL" },
//   {
//     title: "Waterloo Bay Hotel - Manager’s Quarters",
//     image: managersQuartersImage,
//     category: "COMMERCIAL",
//   },
//   {
//     title: "Grape Therapy Drinking Den",
//     image: grapeTherapyImage,
//     category: "COMMERCIAL",
//   },
//   {
//     title: "Proud Henry Ginoteca",
//     image: proudHenryImage,
//     category: "COMMERCIAL",
//   },
//   { title: "Do Re Mi Café", image: doReMiImage, category: "COMMERCIAL" },
// ];

// const Projects = () => {
//   return (
//     <div className="projects-page">
//       {/* Fixed Background Image Container */}
//       <div className="fixed-background">
//         {/* Empty div for the background image */}
//       </div>

//       {/* Title and Projects Container */}
//       <div className="content-container">
//         <div className="title-container">
//           <h1 className="portfolio-title">
//             Portfolio <em>Projects</em>
//           </h1>
//         </div>
//         <div className="projects-container">
//           {projectData.map((project, index) => (
//             <div className="project-item" key={index}>
//               <div className="project-image-container">
//                 <img src={project.image} alt={project.title} />
//                 <div className="project-hover-overlay">
//                   <h1>View<em> Project</em></h1>
//                 </div>
//               </div>
//               <p className="project-title">{project.title}</p>
//               <p className="project-category">{project.category}</p>
//             </div>
//           ))}
//         </div>

//         <div className="about-contact">
//           <div className="contact-left">
//             <h1>Get In Touch</h1>
//             <p>We look forward to chatting about your project.</p>
//             <Link to="/contact" className="book-consultation-link">
//               Book A Consultation
//             </Link>
//           </div>
//           <div className="contact-right">
//             <img
//               src={contactImage}
//               alt="Consultation"
//               className="contact-image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;