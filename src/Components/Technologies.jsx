import "../CSS/Technologies.css";

import tech1 from "../assets/Images/machinelearning-1.webp";
import tech2 from "../assets/Images/Artifical-Intelligance.webp";

const technologies = [
  { id: 1, title: "Machine Learning", image: tech1 },
  { id: 2, title: "Artificial Intelligence", image: tech2 },
  { id: 3, title: "Deep Learning", image: tech1 },
  { id: 4, title: "Image Processing", image: tech2 },
  { id: 5, title: "Python", image: tech1 },
  { id: 6, title: "Java", image: tech2 },
  { id: 7, title: "Big Data", image: tech1 },
  { id: 8, title: "Block Chain", image: tech2 },
  { id: 9, title: "Cloud Computing", image: tech1 },
  { id: 10, title: "Data Mining", image: tech2 },
];

const Technology = () => {
  return (
    <section className="technology">
      <h2 className="tech-title">
        LATEST <span>TECHNOLOGIES</span>
      </h2>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech.id}>
            <img src={tech.image} alt={tech.title} />

            <div className="tech-content">
              <h3>{tech.title}</h3>

              <div className="tech-links">
                <a href="#">Mini Project</a>
                <a href="#">Major Project</a>
                <a href="#">View Project Titles</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
