import { useParams } from "react-router-dom";
import PageBanner from "../../Components/PageBanner";
import { projectsData } from "../../Data/projectsData";
import "../../CSS/CategoryProjectsTable.css";

const CategoryProjectsTable = () => {
  const { level, branch, type, category } = useParams();

  const normalizedLevel = level.replace("-projects", "");
  const formattedCategory = category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const filteredProjects = projectsData.filter(
    (p) =>
      p.level === normalizedLevel &&
      p.branch === branch &&
      p.type === type &&
      p.category === formattedCategory
  );

  return (
    <>
      <PageBanner title={formattedCategory.toUpperCase()} />

      <section className="category-table-section">
        <div className="category-table-container">

          <h2 className="category-title">
            {formattedCategory.split(" ")[0]}{" "}
            <span>{formattedCategory.split(" ").slice(1).join(" ")}</span>
          </h2>

          <div className="table-wrapper">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Abstract / PDF</th>
                </tr>
              </thead>

              <tbody>
                {filteredProjects.map((project, index) => (
                  <tr key={project.id}>
                    <td>{index + 1}</td>
                    <td>{project.title}</td>
                    <td>
                      <button className="pdf-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredProjects.length === 0 && (
              <p className="no-data">
                No projects available for this category.
              </p>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default CategoryProjectsTable;
