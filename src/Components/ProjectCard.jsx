import "./BranchCards.css";
import { useNavigate } from "react-router-dom";

const branches = [
  { name: "CSE", icon: "💻", slug: "cse" },
  { name: "ECE", icon: "📡", slug: "ece" },
  { name: "EEE", icon: "⚡", slug: "eee" },
  { name: "CIVIL", icon: "🏗️", slug: "civil" },
  { name: "MECH", icon: "⚙️", slug: "mech" },
];

const ProjectCards = ({ level }) => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/${level}-${slug}-projects`);
  };

  return (
    <section className="branch-section">
      <div className="branch-container">
        <h2 className="branch-title">
          {level.toUpperCase()} <span>PROJECTS</span>
        </h2>

        <div className="branch-grid">
          {branches.map((item) => (
            <div className="branch-card" key={item.slug}>
              <div className="branch-icon">{item.icon}</div>
              <h3>{item.name}</h3>

              <button onClick={() => handleClick(item.slug)}>
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
