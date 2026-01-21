import { useEffect, useState } from "react";
import "../CSS/FeaturedSlider.css"

const slides = [
  {
    id: 1,
    title:
      "An Artificial Intelligence and Cloud Based Collaborative Platform for Plant Disease Identification",
    date: "July 5, 2020 10:14 pm",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title:
      "Deep Learning Based Smart Traffic Management System",
    date: "July 6, 2020 11:20 am",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title:
      "IoT Based Health Monitoring System Using Machine Learning",
    date: "July 7, 2020 09:45 am",
    videoId: "dQw4w9WgXcQ",
  },
];

const FeaturedSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000); // auto slide every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="featured-slider">
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === active ? "active" : ""}`}
          >
            <a
              href={`https://www.youtube.com/watch?v=${slide.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="slide-thumb"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${slide.videoId}/hqdefault.jpg)`,
              }}
            >
              <div className="slide-overlay">
                <span className="play-icon">▶</span>
              </div>
            </a>

            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>TRU PROJECTS • {slide.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === active ? "dot active" : "dot"}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSlider;
