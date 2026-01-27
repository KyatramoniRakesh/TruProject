import "../CSS/Technologies.css";

import tech1 from "../assets/Images/machinelearning-1.webp";
import tech2 from "../assets/Images/Artifical-Intelligance.webp";
import tech3 from "../assets/Images/t3.jpg";
import tech4 from "../assets/Images/t4.jpg";
import tech5 from "../assets/Images/t5.jpg";
import tech6 from "../assets/Images/t6.jpg";
import tech7 from "../assets/Images/t7.jpg";
import tech8 from "../assets/Images/t8.jpg";
import tech9 from "../assets/Images/t9.jpg";
import tech10 from "../assets/Images/t10.jpg";
import tech11 from "../assets/Images/t11.jpg";
import tech12 from "../assets/Images/t12.jpg";


const technologies = [
  { id: 1, title: "Machine Learning", image: tech1 },
  { id: 2, title: "Artificial Intelligence", image: tech2 },
  { id: 3, title: "Deep Learning", image: tech3 },
  { id: 4, title: "Image Processing", image: tech4 },
  { id: 5, title: "Python", image: tech5 },
  { id: 6, title: "Java", image: tech6 },
  { id: 7, title: "Big Data", image: tech7 },
  { id: 8, title: "Block Chain", image: tech8 },
  { id: 9, title: "Cloud Computing", image: tech9 },
  { id: 10, title: "Data Mining", image: tech10 },
  { id: 11, title: "Networking", image: tech11 },
  { id: 12, title: "Android", image: tech12 },
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
