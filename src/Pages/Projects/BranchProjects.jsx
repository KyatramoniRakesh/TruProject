import { useParams, Link } from "react-router-dom";
import PageBanner from "../../Components/PageBanner";

const BranchProjects = () => {
  const { level, branch } = useParams();

  return (
    <>
      <PageBanner
        title={`${level?.toUpperCase()} ${branch?.toUpperCase()} PROJECTS`}
      />

      <section className="branch-projects">
        <div className="type-cards">

          <Link to={`/${level}/${branch}/major`} className="type-card">
            Major Projects
          </Link>

          <Link to={`/${level}/${branch}/minor`} className="type-card">
            Minor Projects
          </Link>

        </div>
      </section>
    </>
  );
};

export default BranchProjects;
