import { useParams } from "react-router-dom";
import PageBanner from "../../Components/PageBanner";
import { projectsData } from "../../Data/projectsData";
import "../../CSS/ProjectList.css";

const ProjectList = () => {
  const { level, branch, type } = useParams();

  // ✅ NORMALIZE PARAMS
  const normalizedLevel = level?.replace("-projects", "");
  const normalizedType = type?.replace("-projects", "");

  // ✅ FILTER PROJECTS
  const filteredProjects = projectsData.filter(
    (p) =>
      p.level === normalizedLevel &&
      p.branch === branch &&
      p.type === normalizedType
  );

  // ✅ GROUP BY CATEGORY
  const categories = [
    ...new Map(
      filteredProjects.map((item) => [item.category, item])
    ).values(),
  ];

  return (
    <>
      <PageBanner
        title={`${normalizedLevel?.toUpperCase()} ${branch?.toUpperCase()} ${normalizedType?.toUpperCase()} PROJECTS`}
      />

      <section className="project-list-section">
        <div className="project-list-container">

          {categories.length === 0 ? (
            <p className="no-projects">
              No projects available for this category.
            </p>
          ) : (
            <div className="project-grid">
              {categories.map((cat, index) => (
                <div className="project-card" key={index}>
                  <div className="project-card-inner">

                    <img
                      src={cat.image}
                      alt={cat.category}
                      className="project-image"
                    />

                    <h3 className="project-title">
                      {cat.category}
                    </h3>

                    <button className="view-btn">
                      View
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
