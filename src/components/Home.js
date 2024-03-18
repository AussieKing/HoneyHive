import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./Home.css";
import { projectsData } from "./projectsData";
import homeBackground from "../assets/home-background.PNG";
import contactImage from "../assets/contact-image.jpg";
import specialtyImage from "../assets/home-specialty-image.jpg";
import video1 from "../assets/video-1.mp4";

const Home = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const offset = window.pageYOffset;
      parallaxRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
    }
  };

  return (
    <div className="home-page">
      <div className="home-hero">
        <div
          className="parallax-background"
          ref={parallaxRef}
          style={{ backgroundImage: `url(${homeBackground})` }}
        ></div>{" "}
      </div>

      {/* Content that scrolls over the background */}
      <div className="home-overlay">
        <div className="home-hero-content">
          <div className="home-image-container">
            <img
              src={specialtyImage}
              alt="Specialty"
              className="home-specialty-image"
            />
          </div>
          <div className="home-hero-text">
            <h1>
              We curate sophisticated yet grounded spaces, prioritizing{" "}
              <em>timeless </em> elegance with <em>functional</em> design.
            </h1>
          </div>
        </div>

        <div className="title-div">
          <p>
            <strong>LET’S WORK TOGETHER TO ENHANCE YOUR SPACE</strong>{" "}
          </p>
          <p>
            Embrace the essence of your imagination and let Honey & Hive
            Interiors bring it to life. If you're grappling with uncertainties,
            we're here to illuminate the path of possibilities. For those
            pressed for time, relax as we meticulously manage every detail,
            guiding you from the initial concept phase to completion. Your
            journey from the initial concept to the final flourish is our
            responsibility. Embark on Honey & Hive Interiors' serene and
            thorough approach to interior design, unlocking the extraordinary
            potential of your home or business space. The journey to
            transformation begins now…
          </p>
          <Link to="/services" className="read-more-link">
            Explore our range of services
          </Link>
        </div>

        <div className="home-content-wrapper">
          <div className="home-text-half">
            <div className="home-title">
              <p>
                <strong>WHAT WE DO</strong>
              </p>
            </div>
            <div className="home-description">
              <p>
                At Honey & Hive Interiors, our expertise in interior design
                spans across residential and hospitality sectors throughout
                Australia. Whether it’s a rejuvenation or a complete overhaul of
                your space, we're dedicated to an engaging and delightful
                process tailored to your unique needs. We carefully compile all
                interior documentation, including schedules and essential
                consultant details. This thorough preparation allows you to
                present a detailed construction plan to your builders and
                tradespeople, ensuring accurate pricing and meticulous
                execution. Guided by your aesthetic preferences and functional
                requirements, we work together to craft a vivid, multi-layered
                reality. Our forte lies in harmoniously blending heritage
                elements with contemporary design, ensuring each space we touch
                resonates with time-honored charm and modern elegance. With
                Honey & Hive Interiors, you can expect consistent communication,
                a smooth development process, meticulous attention to detail,
                and a transformation that enriches your life and space.
              </p>
              <Link to="/contact" className="book-consultation-link">
                Book A Consultation
              </Link>
            </div>
          </div>

          <div className="home-image-half">
            <div className="home-aligned-image">
              <video width="640" height="360" controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="projects-section">
          <div className="projects-header">
            <h1>
              Portfolio <em>Projects</em>
            </h1>
          </div>
          <div className="projects-carousel">
            {projectsData && projectsData.length > 0 ? (
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {projectsData.map((project, index) => {
                  const imageUrl = project.backgroundImage?.url || "";
                  return (
                    <SwiperSlide key={index} className="carousel-slide">
                      <Link to={`/projects/${project.slug}`}>
                        <div className="carousel-image-container">
                          <img src={imageUrl} alt={project.title} />
                          <div className="carousel-hover-overlay">
                            <h1>
                              View <em>Project</em>
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <div>No projects to display</div>
            )}
          </div>
        </div>
        {/* Key Offerings */}
        <div className="key-offerings-container">
          <div className="key-offerings-content">
            <div className="key-offerings-image">
              <img
                src={require("../assets/key-offerings.PNG")}
                alt="Key Offerings"
              />
            </div>
            <div className="key-offerings-title">
              <h1>
                Key<em> Offerings</em>
              </h1>
              <Link to="/services" className="read-more-link">
                BUILDING DESIGN
              </Link>
              <Link to="/services" className="read-more-link">
                INTERIOR DESIGN
              </Link>
              <Link to="/services" className="read-more-link">
                INTERIOR STYLING
              </Link>
              <Link to="/services" className="read-more-link">
                INTERIOR STAGING
              </Link>
            </div>
          </div>
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

export default Home;
