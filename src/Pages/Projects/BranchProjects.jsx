import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import PageBanner from "../../Components/PageBanner";
import "../../CSS/BranchProjects.css";

import MajorImg from "../../assets/Images/Projects/Major-Project-2.webp";
import MiniImg from "../../assets/Images/Projects/Mini-Project-2.webp";

import { projectsPageContent } from "../../Data/projectsData";

const BranchProjects = () => {
  const { level, branch } = useParams();
  const [expanded, setExpanded] = useState(false);

  const normalizedLevel = level?.replace("-projects", "");

  const levelContent = projectsPageContent?.[normalizedLevel];
  const branchContent = levelContent?.branches?.[branch];



  return (
    <>
      <PageBanner
        title={`${level?.toUpperCase()} ${branch?.toUpperCase()} PROJECTS`}
      />

      <section className="branch-projects-section">
        <div className="branch-projects-container">

          {/* ===== TITLE ===== */}
          <h2 className="branch-title">
            PROJECT <span>TYPES</span>
          </h2>

          {/* ===== CARDS ===== */}
          <div className="type-grid">

            <Link
              to={`/${level}/${branch}/major`}
              className="type-card"
            >
              <img src={MajorImg} alt="Major Projects" />
              <h3>Major Projects</h3>
              <span className="view-btn">View</span>
            </Link>

            <Link
              to={`/${level}/${branch}/minor`}
              className="type-card"
            >
              <img src={MiniImg} alt="Mini Projects" />
              <h3>Mini Projects</h3>
              <span className="view-btn">View</span>
            </Link>

          </div>

          {/* ===== DESCRIPTION ===== */}

          {branchContent?.shortDesc ? (
            <p className="projects-desc">
              {branchContent.shortDesc}
            </p>
          ) : levelContent?.shortDesc ? (
            <p className="projects-desc">
              {levelContent.shortDesc}
            </p>
          ) : null}

          {expanded && (
            <>
              {branchContent?.longDesc ? (
                <p className="projects-desc">
                  {branchContent.longDesc}
                </p>
              ) : levelContent?.longDesc ? (
                <p className="projects-desc">
                  {levelContent.longDesc}
                </p>
              ) : null}
            </>
          )}

          {(branchContent || levelContent) && (
            <button
              className="read-more-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read less ↑" : "Read more ↓"}
            </button>
          )}


        </div>
      </section>
    </>
  );
};

export default BranchProjects;