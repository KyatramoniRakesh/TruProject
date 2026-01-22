import "../CSS/PageBanner.css";
import bgImage from "../assets/Images/aboutbanner.webp";

const PageBanner = ({ title, bgImage }) => {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="page-banner-overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default PageBanner;
