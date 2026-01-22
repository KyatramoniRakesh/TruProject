import { useParams } from "react-router-dom";
import PageBanner from "../../Components/PageBanner";
import { projectsData } from "../../Data/projectsData";
import "../../CSS/ProjectList.css";

const ProjectList = () => {
  const { level, branch, type } = useParams();

  const filteredProjects = projectsData.filter(
    (p) =>
      p.level === level &&
      p.branch === branch &&
      p.type === type
  );

  return (
    <>
      <PageBanner
        title={`${level?.toUpperCase()} ${branch?.toUpperCase()} ${type?.toUpperCase()} PROJECTS`}
      />

      <section className="project-list-section">
        <div className="project-list-container">

          {filteredProjects.length === 0 ? (
            <p className="no-projects">
              No projects available for this category.
            </p>
          ) : (
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <div className="project-card" key={project.id}>
                  <div className="project-card-inner">
                    <h3>{project.title}</h3>

                    <p className="project-meta">
                      {level.toUpperCase()} • {branch.toUpperCase()} •{" "}
                      {type.toUpperCase()}
                    </p>

                    <button className="project-btn">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default ProjectList;
