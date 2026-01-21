import "../CSS/Services.css";

import btech from "../assets/Images/Services/B.tech_-1.png";
import mtech from "../assets/Images/Services/Mtech-1.png";
import mini from "../assets/Images/Services/Mini-Project-1.png";
import major from "../assets/Images/Services/Major-Project-1.png";
import ieee from "../assets/Images/Services/IEE-1.png";
import bulk from "../assets/Images/Services/logorithm.png";
import paper from "../assets/Images/Services/Paper-Writing-Publishing-1.png";
import document from "../assets/Images/Services/Document-Writing-with-plaglarism-1.png";
import internship from "../assets/Images/Services/01.webp";
import training from "../assets/Images/Services/06.webp";

const services = [
  { title: "B.Tech Projects", icon: btech },
  { title: "M.Tech Projects", icon: mtech },
  { title: "Mini Projects", icon: mini },
  { title: "Major Projects", icon: major },
  { title: "IEEE Projects", icon: ieee },
  { title: "Bulk Sale", icon: bulk },
  { title: "Paper writing & Publishing", icon: paper },
  { title: "Document writing with plagiarism", icon: document },
  { title: "Summer Internships", icon: internship },
  { title: "Trainings", icon: training },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        {/* HEADING */}
        <div className="services-header">
          <h2>
            OUR <span>SERVICES</span>
          </h2>
          <div className="underline"></div>
        </div>

        {/* GRID */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
