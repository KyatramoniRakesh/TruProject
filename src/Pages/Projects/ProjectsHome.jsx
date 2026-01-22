import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import PageBanner from "../../Components/PageBanner";
import "../../CSS/ProjectsHome.css";


const branches = [
  { name: "CSE", slug: "cse", icon: "💻" },
  { name: "ECE", slug: "ece", icon: "📡" },
  { name: "EEE", slug: "eee", icon: "⚡" },
  { name: "CIVIL", slug: "civil", icon: "🏗️" },
  { name: "MECH", slug: "mech", icon: "⚙️" },
];

const ProjectsHome = () => {
  const { level } = useParams();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <PageBanner title={`${level?.toUpperCase()} PROJECTS`} />

      <section className="projects-main">
        <div className="projects-container">

          <h2 className="projects-title">
            {level?.toUpperCase()} <span>PROJECTS</span>
          </h2>

          <div className="projects-grid">
            {branches.map((branch) => (
              <div className="project-card" key={branch.slug}>
                <div className="project-icon">{branch.icon}</div>

                <h3>{branch.name}</h3>

                <Link to={`/${level}/${branch.slug}`}>
                  <button>View</button>
                </Link>
              </div>
            ))}
          </div>

          <p className="projects-desc">
            “Focus your entire mind on the project. The sun’s rays do not begin to
            burn until they are focused.” Even the tiniest activities should be
            done with your heart, mind, and soul.
          </p>

          {expanded && (
            <p className="projects-desc">
              This is the key to achieving success. You might spark your friend’s
              interest by securing a Project with Tru Projects. Give us a call to
              learn more about the projects. Because we only work on projects, we
              stand out by simplifying all aspects of a project’s issues.
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
