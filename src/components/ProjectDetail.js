import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from './projectsData'; // Adjust the path as necessary
import './ProjectDetail.css';

const renderRichText = (richText) => {
  if (!richText) return null;
  return richText.map((block, index) => (
    <p key={index}>
      {block.children.map((child, childIndex) => (
        <span key={childIndex}>{child.text}</span>
      ))}
    </p>
  ));
};

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.slug === slug);
    setProject(foundProject || null);
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="project-detail-container">
      {project.backgroundImage && (
        <div
          className="project-detail-background"
          style={{ backgroundImage: `url(${project.backgroundImage.url})` }}
        />
      )}

      <div className="project-content">
        <div className="first-section">
          <h1 className="project-title">{project.title}</h1>
          <div className="featured-image-container">
            {project.imagesGallery.slice(0, 1).map((img, index) => (
              <img key={index} src={img.url} alt={img.alt || 'Featured image'} className="featured-image" />
            ))}
          </div>
          <div className="project-description">
            <p><strong>LOCATION:</strong> {project.location}</p>
            <p><strong>DESIGNER:</strong> {project.interiorDesign}</p>
            <p><strong>TYPE:</strong> {project.projectType}</p>
          </div>
        </div>

        <div className="full-width-hero">
          {project.imagesGallery.slice(1, 2).map((img, index) => (
            <img key={index} src={img.url} alt={img.alt} className="full-width-hero-image" />
          ))}
        </div>

        <div className="description-gallery-wrap">
          <div className="description">
            {project.description && renderRichText(project.description)}
          </div>
          <div className="gallery">
            {project.imagesGallery.slice(2, 4).map((img, index) => (
              <div key={index} className="gallery-image-container">
                <img src={img.url} alt={img.alt} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="concept-gallery-wrap">
          <div className="gallery">
            {project.imagesGallery.slice(4).map((img, index) => (
              <div key={index} className="gallery-image-container">
                <img src={img.url} alt={img.alt} className="gallery-image" />
              </div>
            ))}
          </div>
          <div className="concept">
            {project.concept && renderRichText(project.concept)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

