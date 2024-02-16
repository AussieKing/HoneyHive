import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:1337/api/projects?filters[slug][$eq]=${slug}&populate=*`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length > 0) {
          setProject(data.data[0].attributes);
        } else {
          setError("Project not found");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setLoading(false);
      });
  }, [slug]);

  const renderRichText = (richText) => {
    if (!richText) return null;

    return richText.map(
      (block, index) =>
        block.type === "paragraph" && (
          <p key={index}>
            {block.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </p>
        )
    );
  };

  // A helper function to render a full-width hero image
  const renderFullWidthImage = (imageData, altText) =>
    imageData && (
      <div className="full-width-hero">
        <img
          src={`http://localhost:1337${imageData.attributes.url}`}
          alt={altText || "Hero"}
          className="full-width-hero-image"
        />
      </div>
    );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const backgroundImageStyle = {
    backgroundImage: project?.backgroundImage?.data?.attributes?.url
      ? `url(http://localhost:1337${project.backgroundImage.data.attributes.url})`
      : "none",
  };
  // Separate the images for the second and third sections
  const [secondSectionImage, thirdSectionImage, ...otherImages] =
    project?.imagesGallery?.data || [];

  return (
    <div>
      {/* This is the fixed background */}
      <div className="project-detail-background" style={backgroundImageStyle} />

      {/* This is the content that scrolls over the fixed background */}
      <div className="project-content">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {project && (
          <>
            <div className="first-section">
              <h1 className="project-title">{project.title}</h1>
              <div className="image-container">
                {secondSectionImage && (
                  <img
                    src={`http://localhost:1337${secondSectionImage.attributes.url}`}
                    alt={`Featured Image for ${project.title}`}
                    className="featured-image"
                  />
                )}
              </div>
              <div className="strapi-fields">
                <p className="location"><strong>LOCATION </strong><p>{project.location}</p></p>
                <p className="interior-design"><strong>DESIGNER </strong><p>{project.interiorDesign}</p></p>
                <p className="builder"><strong>BUILDER </strong><p>{project.builder}</p></p>
                <p className="photography"><strong>PHOTOGRAPHY </strong><p>{project.photography}</p>
                </p>
              </div>
            </div>
            <div className="second-section">
              {thirdSectionImage &&
                renderFullWidthImage(thirdSectionImage, "Third Section Hero")}
              <div className="content-with-images">
                <div className="description">
                  {project.description && renderRichText(project.description)}
                </div>
                <div className="side-by-side-images">
                  {otherImages.slice(0, 2).map((img, index) => (
                    <img
                      key={index}
                      src={`http://localhost:1337${img.attributes.url}`}
                      alt={`Gallery Image ${index}`}
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="third-section">
              <div className="content-with-images reverse">
                <div className="description">
                  {project.concept && renderRichText(project.concept)}
                </div>
                <div className="side-by-side-images">
                  {otherImages.slice(3, 5).map((img, index) => (
                    <img
                      key={index}
                      src={`http://localhost:1337${img.attributes.url}`}
                      alt={`Gallery Image ${index}`}
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
