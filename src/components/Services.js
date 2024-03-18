import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import servicesBackground from "../assets/services-background.PNG";
import contactImage from "../assets/contact-image.jpg";
import specialtyImage from "../assets/specialty-image.PNG";
import smallerImage from "../assets/smaller-image.jpeg";
import horizontalImage from "../assets/services-horizontal.PNG";
import designPhases from "../assets/design-phases.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { projectsData } from "./projectsData";

const Services = () => {
  return (
    <div className="services-page">
      <div
        className="services-hero"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      >
        <div className="background-overlay"></div>
      </div>

      <div className="services-overlay">
        <div className="services-hero-content">
          <div className="services-image-container">
            <img
              src={specialtyImage}
              alt="Specialty tap and textures"
              className="services-specialty-image"
            />
          </div>
          <div className="services-hero-text">
            <h1>
              Bringing Your Vision to <em>Life</em>
            </h1>
          </div>
        </div>

        <div className="services-subcontent">
          <div className="title-div">
            <p>
              <strong>OUR SERVICES</strong>
            </p>
            <div className="services-specialties-list">
              <p>RESIDENTIAL DESIGN</p>
              <p>RETAIL DESIGN</p>
              <p>HOSPITALITY DESIGN</p>
              <p>PROJECT MANAGMENT</p>
              <p>PROPERTY STAGING & STYLING</p>
            </div>
          </div>
          <div className="title-div">
            <p>
              <strong>OUR MISSION</strong>
            </p>
            <p>
              Dedicated to our mission of delivering exceptional value, we take
              pride in offering personalized interior design solutions that
              transcend conventional standards. Our commitment extends beyond
              quality and service, ensuring a seamless and stress-free
              experience that saves you time, whether working with you in person
              or remotely. With expertise in crafting and revitalizing
              residential and hospitality spaces, we excel in seamlessly
              blending innovative functionality with meticulously curated
              designs. This is what sets us apart!
            </p>
          </div>
          <div className="services-aligned-image">
            <img
              src={smallerImage}
              alt="Aligned Specialty"
              className="services-aligned-image"
            />
          </div>
        </div>

        {/* The new container */}

        <div className="services-content-wrapper">
          <div className="services-image-half">
            <img
              src={horizontalImage}
              alt="Dining table with chairs and a plant in the middle."
              className="services-horizontal-image"
            />
          </div>
          <div className="services-text-half">
            <div className="services-title">
              <p>
                <strong>WHAT WE DO</strong>
              </p>
            </div>
            <div className="services-description">
              <p>
                Embarking on a design project can initially feel overwhelming,
                particularly if you find yourself short on time or uncertain
                about your vision. <p></p>
                The thought of orchestrating an entire team to transform your
                space can be a daunting and we get that!<p></p>
                At Honey & Hive Interiors, we're here to lift this burden,
                offering our expertise to streamline the process and ensure a
                result that surpasses your expectations. <p></p>
                We encourage you to engage H&H from the very beginning, and from
                that point forward, we will take care of the intricacies and the
                nitty gritty. <p></p>
                Our seamless communication with architects, builders, trades and
                suppliers ensures a collaborative effort, bringing your vision
                to life. We truly believe that every space possesses inherent
                potential, and our expertise lies in realizing this potential
                and bringing it to fruition. <p></p>
                Here is an overview of our design process when you choose to
                partner with us.
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
            <h1>
              Our <em>Process</em>
            </h1>
            <p>
              The Honey & Hive design process can be broken down into distinct
              phases, allowing you the freedom to either engage in a
              comprehensive service or pick and choose the specific services
              that align with your project's needs.
            </p>
            <div className="interior-design-phases">
              <div className="phase-container">
                {/* <h2>PHASE 0</h2> */}
                <div>
                  <p>
                    <strong>INITIAL CONSULTATION</strong>
                  </p>
                  <p>
                    We begin with a comprehensive review of your space or plans
                    during the Initial Design Consultation. We offer in-person
                    or online meetings, making it convenient for both local and
                    interstate projects. We'll share our interior concept and
                    vision, along with a fee proposal and letter of Engagement
                    outlining the Scope of Works and pricing for our design
                    services.
                  </p>
                  <p>Consultation + Agreement - $290</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE 1</h2>
                <div>
                  <p>CONCEPT DESIGN</p>
                  <p>
                    The excitement begins with the creative visualisation of
                    your Project. We gather inspiration, sketch the Concept
                    Design, share preliminary 3D drawings, and offer finish and
                    fixture palettes for your choice. We gather inspiration from
                    collaborative Pinterest mood boards and start the spatial
                    planning of internal layouts by creating and sharing
                    preliminary 3D Concept Drawings, including any custom
                    joinery designs.
                    <p></p>
                    We also begin the interior selections process by offering
                    finish and fixture palettes of your choice. In this phase we
                    conceptualize the overall look and feel of your space,
                    ensuring it aligns with your style preferences and
                    functional needs.
                  </p>
                  <p>Hourly Fixed Fee - $250</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE 2</h2>
                <div>
                  <p>BUILDING DESIGN</p>
                  <p>
                    This is when we integrate your feedback to refine and bring
                    your design vision closer to reality. Layouts are finalised
                    with scaled plans, including 3D representations of all
                    cabinetry designs, and the showcasing of internal finishes
                    and fixtures.
                  </p>
                  <p>Hourly Fixed Fee - $250</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE 3</h2>
                <div>
                  <p>DETAIL DRAWINGS</p>
                  <p>
                    Here, we deliver meticulously detailed "working drawings,"
                    that include the essential dimensions and elevations
                    necessary to obtain your Building Approval. The Detailed
                    Drawings (DD's) will serve as your Builder's plans for
                    construction.
                    <p></p>
                    Guided by your stylistic preferences and practical "must
                    have s", we work together to craft a vivid, multi-faceted
                    representation of your vision. Our forte lies in the
                    preservation and fusion of existing heritage elements with
                    contemporary design to ensure today's relevance and
                    longevity for many years to come."
                  </p>
                  <p>Hourly Fixed Fee - $250</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE 4</h2>
                <div>
                  <p>DESIGN DOCUMENTATION</p>
                  <p>
                    This is where we get specific with comprehensive
                    documentation of all your Interior Specifications .
                    Meticulously curated schedules and any relevant consultant
                    information are collated to ensure your project team has
                    everything they need to execute successfully.
                  </p>
                  <p>Hourly Fixed Fee - $150</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE 5</h2>
                <div>
                  <p>FURNITURE & STYLING</p>
                  <p>
                    Adding those final touches to make your space truly feel
                    like home. Our procurement service involves sourcing the
                    perfect furnishings, art, and accessories. We handle the
                    ordering and delivery of approved items, and we always
                    leverage our trade discounts to maximise your savings.
                  </p>
                  <p>Hourly Fixed Fee - $150</p>
                </div>
              </div>
            </div>
          </div>
          <div className="interior-design-image">
            <img
              src={designPhases}
              alt="Wooden stairs with concrete textures and plants"
            />
          </div>
        </div>

        <div className="projects-section">
          <h1>
            Portfolio <em>Projects</em>
          </h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index} className="carousel-slide">
                <Link to={`/projects/${project.slug}`}>
                  <div className="carousel-image-container">
                    <img
                      src={project.backgroundImage?.url || ""}
                      alt={project.title}
                    />
                    <div className="carousel-hover-overlay">
                      <h1>
                        View <em>Project</em>
                      </h1>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
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
