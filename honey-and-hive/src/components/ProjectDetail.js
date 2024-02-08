import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';


const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:1337/api/projects?filters[slug][$eq]=${slug}&populate=*`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length > 0) {
          setProject(data.data[0].attributes);
        } else {
          setError('Project not found');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  }, [slug]);

  const renderRichText = (richText) => {
    return richText.map((block, index) => {
      if (block.type === 'paragraph') {
        return (
          <p key={index}>
            {block.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </p>
        );
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="project-detail-container">
      {project && (
        <div>
          <h1>{project.title}</h1>
          <img 
            src={`http://localhost:1337${project.mainImage.data.attributes.url}`} 
            alt={project.title} 
            className="project-detail-image" 
          />
          <div className="project-detail-description">
            {project.description && renderRichText(project.description)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;