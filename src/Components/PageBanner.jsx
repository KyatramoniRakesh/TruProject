import "../CSS/PageBanner.css";
import defaultBanner from "../assets/Images/aboutbanner.webp";

const PageBanner = ({ title, bgImage }) => {
  const bannerImage = bgImage || defaultBanner;

  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="page-banner-overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default PageBanner;
