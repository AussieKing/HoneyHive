import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeBackground from "../assets/home-background.PNG";
import contactImage from "../assets/contact-image.jpg";
import specialtyImage from "../assets/home-specialty-image.jpg";
import video1 from "../assets/video-1.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/projects?populate=*")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log and check the structure
        // Set projects to an empty array if data.data is not iterable
        setProjects(Array.isArray(data.data) ? data.data : []);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setProjects([]); // Ensure projects is always an array
      });
  }, []);

  return (
    <div className="home-page">
      <div
        className="home-hero"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        {/* Semi-transparent overlay that allows the fixed background to be visible */}
        <div className="background-overlay"></div>
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
              We create earthy and considerate spaces with an emphasis on{" "}
              <em>timeless and considered</em> design.
            </h1>
          </div>
        </div>

        <div className="title-div">
          <h2>
            LET’S COLLABORATE TO ELEVATE YOUR SPACE <p></p>
          </h2>
          <p>
            Embrace the essence of your imagination and let Honey & Hive
            Interiors bring it to life. If you're grappling with uncertainties,
            we're here to illuminate the path of possibilities. For those
            pressed for time, relax as we meticulously manage every detail,
            easing your load. Your journey from the initial concept to the final
            flourish is our responsibility. Embark on Honey & Hive Interiors'
            serene and thorough approach to interior design, unlocking the
            extraordinary potential of your home or business space. The journey
            to transformation begins now…
          </p>
          <Link to="/services" className="read-more-link">
            Learn About Our Services
          </Link>
        </div>

        <div className="home-content-wrapper">
          <div className="home-text-half">
            <div className="home-title">
              <h2>WHAT WE DO</h2>
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
          {projects && projects.length > 0 ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {projects.map((project) => {
                const { attributes } = project;
                const imageUrl = attributes.mainImage.data
                  ? `http://localhost:1337${attributes.mainImage.data.attributes.url}`
                  : "";
                return (
                  <SwiperSlide key={project.id} className="carousel-slide">
                    <Link to={`/projects/${project.attributes.slug}`}>
                      <img src={imageUrl} alt={attributes.title} />
                      <div className="carousel-hover-overlay">
                        <h1>View <em>Project</em></h1>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div>No projects to display</div> // Display this if there are no projects
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
                INTERIOR DESIGN
              </Link>
              <Link to="/services" className="read-more-link">
                INTERIOR STYLING
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
