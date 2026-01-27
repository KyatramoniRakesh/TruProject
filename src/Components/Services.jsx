import "../CSS/Services.css";
import { Link } from "react-router-dom";


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
  { title: "B.Tech Projects", icon: btech, link: "/btech-projects" },
  { title: "M.Tech Projects", icon: mtech, link: "/mtech-projects" },
  { title: "Mini Projects", icon: mini, link: "/mini-projects" },
  { title: "Major Projects", icon: major, link: "/major-projects" },
  { title: "IEEE Projects", icon: ieee, link: "/ieee-projects" },
  { title: "Bulk Sale", icon: bulk, link: "/bulk-sale" },
  { title: "Paper writing & Publishing", icon: paper, link: "/paper-writing" },
  { title: "Document writing with plagiarism", icon: document, link: "/document-writing" },
  { title: "Summer Internships", icon: internship, link: "/internships" },
  { title: "Trainings", icon: training, link: "/trainings" },
];


const Services = () => {
  return (
    <section className="services">
      <div className="services-container">

        <div className="services-header">
          <h2>
            OUR <span>SERVICES</span>
          </h2>
          <div className="underline"></div>
        </div>


        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              to={service.link}
              className="service-card"
              key={index}
            >
              <img src={service.icon} alt={service.title} />
              <p>{service.title}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
