import { useParams } from "react-router-dom";
import PageBanner from "../../Components/PageBanner";
import { projectsData, categoryDescriptions } from "../../Data/projectsData";
import "../../CSS/CategoryProjectsTable.css";
import { FaRegCirclePlay } from "react-icons/fa6";
import "../../CSS/Testmonial.css";

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

  /* ✅ CATEGORY DESCRIPTION LOGIC */
  const categoryInfo =
    categoryDescriptions[formattedCategory] || {
      title: "About This Project Category",
      description:
        "These projects are designed to provide hands-on experience and practical knowledge in this domain, helping students understand real-world applications and implementation techniques."
    };

  return (
    <>
      <PageBanner title={formattedCategory.toUpperCase()} />

      {/* ================= PROJECT TABLE ================= */}
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

      {/* ================= YOUTUBE CTA ================= */}
      <section className="youtube-cta">
        <div className="youtube-cta-container">
          <div className="youtube-cta-box">
            <p>
              Our Youtube channel is a leading source of expert-driven and
              actionable educational content. Explore hundreds of videos
              featuring experts explaining topics aimed at getting us big ideas
              and core skills.
            </p>

            <button className="youtube-btn">
              <span className="btn-text">Visit Our Channel</span>
              <span>
                <FaRegCirclePlay className="btn-icon" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY DESCRIPTION ================= */}
      <section className="category-description">
        <div className="category-description-container">
          <h3>{categoryInfo.title}</h3>
          <p>{categoryInfo.description}</p>
        </div>
      </section>
    </>
  );
};

export default CategoryProjectsTable;
