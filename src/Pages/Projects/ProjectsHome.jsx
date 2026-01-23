import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import PageBanner from "../../Components/PageBanner";
import "../../CSS/ProjectsHome.css";

import { projectsPageContent } from "../../Data/projectsData.js";

import CSE from "../../assets/Images/Projects/CSE.png";
import ECE from "../../assets/Images/Projects/ECE.png";
import EEE from "../../assets/Images/Projects/EEE.webp";
import Mech from "../../assets/Images/Projects/Mech.webp";
import Civil from "../../assets/Images/Projects/Civil.png";

const branches = [
  {
    name: "CSE",
    slug: "cse",
    image: CSE,
  },
  {
    name: "ECE",
    slug: "ece",
    image: ECE,
  },
  {
    name: "EEE",
    slug: "eee",
    image: EEE,
  },
  {
    name: "CIVIL",
    slug: "civil",
    image: Civil,
  },
  {
    name: "MECH",
    slug: "mech",
    image: Mech,
  },
];

const ProjectsHome = () => {
  const { level } = useParams();
  const [expanded, setExpanded] = useState(false);

  const levelMap = {
    "btech-projects": "btech",
    "mtech-projects": "mtech"
  };

  const pageContent = projectsPageContent[levelMap[level]];



  return (
    <>
      <PageBanner title={`${level?.toUpperCase()} PROJECTS`} />

      <section className="projects-main">
        <div className="projects-container">

          <h2 className="projects-title">
            {level?.toUpperCase()} <span>PROJECTS</span>
          </h2>

          {/* ===== CARDS ===== */}
          <div className="projects-grid">
            {branches.map((branch) => (
              <div className="project-card" key={branch.slug}>
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="project-img"
                />

                <h3>{branch.name}</h3>

                <Link to={`/${level}/${branch.slug}`}>
                  <button className="view-btn">View</button>
                </Link>
              </div>
            ))}
          </div>

          {/* ===== DESCRIPTION ===== */}
          {pageContent?.shortDesc && (
            <p className="projects-desc">
              {pageContent.shortDesc}
            </p>
          )}

          {expanded && pageContent?.longDesc && (
            <p className="projects-desc">
              {pageContent.longDesc}
            </p>
          )}


          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read less ↑" : "Read more ↓"}
          </button>

        </div>
      </section>
    </>
  );
};

export default ProjectsHome;
