import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import servicesBackground from "../assets/services-background.jpg";
import contactImage from "../assets/contact-image.jpg";
import specialtyImage from "../assets/specialty-image.jpg";
import smallerImage from "../assets/smaller-image.jpeg";
import horizontalImage from "../assets/services-horizontal.jpg";
import designPhases from "../assets/design-phases.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import carouselImage1 from "../assets/carousel-image-1.jpg";
import carouselImage2 from "../assets/carousel-image-2.jpg";
import carouselImage3 from "../assets/carousel-image-3.jpg";
import carouselImage4 from "../assets/carousel-image-4.jpg";
import carouselImage5 from "../assets/carousel-image-5.jpg";
import carouselImage6 from "../assets/carousel-image-6.jpg";
import _ from "lodash"; 
import { useInView } from 'react-intersection-observer';


const Services = () => {
  const swiperRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const direction = window.scrollY > lastScrollY ? 'next' : 'prev';
      if (swiperRef.current) {
        if (direction === 'next') {
          swiperRef.current.slideNext();
        } else {
          swiperRef.current.slidePrev();
        }
      }
      setLastScrollY(window.scrollY);
    };

    // Throttle the scroll event to avoid performance issues
    const throttledHandleScroll = _.throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledHandleScroll);

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5,    // Trigger when 50% visible
  });

  return (
    <div className="services-page">
      <div
        className="services-hero"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      >
        {/* Semi-transparent overlay that allows the fixed background to be visible */}
        <div className="background-overlay"></div>
      </div>

      {/* Content that scrolls over the background */}
      <div className="services-overlay">
        <div className="services-hero-content">
          <div className="services-image-container">
            <img
              src={specialtyImage}
              alt="Specialty"
              className="services-specialty-image"
            />
          </div>
          <div className="services-hero-text">
          <h1 ref={ref}>
        Serving <em className={inView ? 'em-animate' : ''}>Your</em> Vision.
      </h1>
          </div>
        </div>
        <div className="services-subcontent">
          <div className="title-div">
            <p>
              <strong>OUR SPECIALTIES</strong>
            </p>
            <div className="services-specialties-list">
              <p>RESIDENTIAL DESIGN</p>
              <p>RETAIL DESIGN</p>
              <p>HOSPITALITY DESIGN</p>
              <p>PROJECT MANAGMENT</p>
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
              alt="Descriptive Alt Text"
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
                about your vision. The thought of orchestrating an entire team
                to transform your space can be a daunting and we get that!<p></p> At
                Honey & Hive Interiors, we're here to lift this burden, offering
                our expertise to streamline the process and ensure a result that
                surpasses your expectations. <p></p>We encourage you to engage H&H from
                the very beginning, and from that point forward, we will take
                care of the intricacies and the nitty gritty. <p></p>Our seamless
                communication with architects, builders, trades and suppliers
                ensures a collaborative effort, bringing your vision to life. We
                truly believe that every space possesses inherent potential, and
                our expertise lies in realizing this potential and bringing it
                to fruition. Here is an overview of our design process when you
                choose to partner with us.
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
              Interior <em>Design</em>
            </h1>
            <p>
              The Honey & Hive design process can be broken down into distinct
              phases, allowing you the freedom to either engage in a
              comprehensive service or pick and choose the specific services
              that align with your project's needs.
            </p>
            <div className="interior-design-phases">
              <div className="phase-container">
                <h2>PHASE ZERO</h2>
                <div>
                  <p>INITIAL CONSULTATION</p>
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
                <h2>PHASE ONE</h2>
                <div>
                  <p>CONCEPT DESIGN</p>
                  <p>
                    The excitement begins with the creative visualisation of
                    your Project. We gather inspiration, sketch the Concept
                    Design, share preliminary 3D drawings, and offer finish and
                    fixture palettes for your choice.
                  </p>
                  <p>Hourly Fixed Fee - $250</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE TWO</h2>
                <div>
                  <p>DESIGN DEVELOPMENT</p>
                  <p>
                    We refine and bring your design closer to reality. Layouts
                    are finalised with scaled plans, including 3D
                    representations of all cabinetry designs, and the showcasing
                    of internal finishes and fixtures.
                  </p>
                  <p>Hourly Fixed Fee - $250</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE THREE</h2>
                <div>
                  <p>DESIGN DOCUMENTATION</p>
                  <p>
                    We get into the nitty-gritty with comprehensive interior
                    design documentation. Carefully curated schedules and
                    relevant consultant information are collated to achieve
                    accurate pricing and precise execution with builders and
                    trades.
                  </p>
                  <p>Hourly Fixed Fee - $150</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE FOUR</h2>
                <div>
                  <p>CONSTRUCTION</p>
                  <p>
                    Here's where your design vision starts taking tangible
                    shape. Our design team works closely with your project
                    manager, builders, and trades for flawless execution. We
                    keep a watchful eye to make sure everything aligns with your
                    expectations and brief requirements.
                  </p>
                  <p>Hourly Fixed Fee - $150</p>
                </div>
              </div>
              <div className="phase-container">
                <h2>PHASE FIVE</h2>
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
            <img src={designPhases} alt="Interior Design" />
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
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide><img src={carouselImage1} alt="Carousel Image 1" /></SwiperSlide>
            <SwiperSlide><img src={carouselImage2} alt="Carousel Image 2" /></SwiperSlide>
            <SwiperSlide><img src={carouselImage3} alt="Carousel Image 3" /></SwiperSlide>
            <SwiperSlide><img src={carouselImage4} alt="Carousel Image 4" /></SwiperSlide>
            <SwiperSlide><img src={carouselImage5} alt="Carousel Image 5" /></SwiperSlide>
            <SwiperSlide><img src={carouselImage6} alt="Carousel Image 6" /></SwiperSlide>
          </Swiper>
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

export default Services;
