import { useEffect, useRef, useState } from "react";
import "../CSS/Banner.css";


import banner1 from "../assets/Images/1-1.webp";
import banner2 from "../assets/Images/2.jpg";
import banner3 from "../assets/Images/3.webp";


import banner1Mobile from "../assets/Images/M1.jpg";
import banner2Mobile from "../assets/Images/M2.jpg";
import banner3Mobile from "../assets/Images/M3.jpg";

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const trackRef = useRef(null);

  
  const desktopSlides = [banner1, banner2, banner3];
  const mobileSlides = [banner1Mobile, banner2Mobile, banner3Mobile];
  const slides = isMobile ? mobileSlides : desktopSlides;
  const totalSlides = slides.length;

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (current === totalSlides) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setCurrent(0);

        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.6s ease-in-out";
          }
        }, 50);
      }, 600);
    }
  }, [current, totalSlides]);

  const goPrev = () => {
    setCurrent(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent(prev => prev + 1);
  };

  return (
    <section className="banner">
      
      <div
        ref={trackRef}
        className="banner-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {slides.map((img, index) => (
          <div className="banner-slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}

        
        <div className="banner-slide">
          <img src={slides[0]} alt="Clone slide" />
        </div>
      </div>

      
      <button className="banner-arrow left" onClick={goPrev}>
        &#10094;
      </button>
      <button className="banner-arrow right" onClick={goNext}>
        &#10095;
      </button>

      
      <div className="banner-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current % totalSlides === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;