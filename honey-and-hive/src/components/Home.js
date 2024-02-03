import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeBackground from "../assets/home-background.jpg";
import contactImage from "../assets/contact-image.jpg";
import specialtyImage from "../assets/home-specialty-image.jpg";
import video1 from "../assets/video-1.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import carouselImage1 from "../assets/carousel-image-1.jpg";
import carouselImage2 from "../assets/carousel-image-2.jpg";
import carouselImage3 from "../assets/carousel-image-3.jpg";
import carouselImage4 from "../assets/carousel-image-4.jpg";
import carouselImage5 from "../assets/carousel-image-5.jpg";
import carouselImage6 from "../assets/carousel-image-6.jpg";

const Home = () => {
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
              We create earthy and sophisticated spaces with an emphasis on{" "}
              <em>timeless</em> and considered design.
            </h1>
          </div>
        </div>

        <div className="title-div">
          <h2>
            LET’S COLLABORATE TO ELEVATE YOUR SPACE{" "}
            <p></p>
            
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
        {/* <div className="home-subcontent">
         
        </div> */}

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
              <SwiperSlide>
                <img src={carouselImage1} alt="Carousel Image 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={carouselImage2} alt="Carousel Image 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={carouselImage3} alt="Carousel Image 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={carouselImage4} alt="Carousel Image 4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={carouselImage5} alt="Carousel Image 5" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={carouselImage6} alt="Carousel Image 6" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Key Offerings */}
        <div className="key-offerings-container">
          <div className="key-offerings-content">
            <div className="key-offerings-image">
              <img
                src={require("../assets/key-offerings.jpg")}
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
