import "../CSS/Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaHome, FaPhoneAlt
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">

          {/* ================= ABOUT + CONTACT ================= */}
          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              Welcome to Tru Projects. Tru Projects are being introduced to make
              a long way from its beginnings. We are the one source and efficient
              student oriented service provider for IT projects.
            </p>

            <h3 className="contact-title">Contact</h3>

            <div className="contact-item">
              <span className="contact-icon">
                <FaHome />
              </span>
              <span className="contact-text">
                407, 4th Floor, Pavani Prestige (R.S Brothers) Building,
                Ameerpet, Opposite Image Hospital & Beside KLM Fashion Mall,
                Hyderabad, Telangana – 500016
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>
              <span className="contact-text">91-9676190678</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <MdEmail />
              </span>
              <span className="contact-text">info@truprojects.in</span>
            </div>

            <div className="footer-socials">
              <a href="https://www.facebook.com/truprojects1/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://x.com/" target="_blank" rel="noreferrer"><FaXTwitter /></a>
              <a href="https://www.linkedin.com/company/tru-projects/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/channel/UCcwZ26sm2QtHjilZjCENIAg" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://in.pinterest.com/truprojects/" target="_blank" rel="noreferrer"><FaPinterestP /></a>
              <a href="https://www.instagram.com/tru_projects/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="footer-col footer-links">
            <h3>Quick Links</h3>

            <div className="footer-links-grid">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/trainings">Trainings</Link></li>

                <li><Link to="/btech-projects">B.Tech Projects</Link></li>
                <li><Link to="/mtech-projects">M.Tech Projects</Link></li>

                <li><Link to="/btech-projects/cse/minor">B.Tech CSE Mini Projects</Link></li>
                <li><Link to="/btech-projects/cse/major">B.Tech CSE Major Projects</Link></li>

                <li><Link to="/mtech-projects/cse/minor">M.Tech CSE Mini Projects</Link></li>
                <li><Link to="/mtech-projects/cse/major">M.Tech CSE Major Projects</Link></li>

                <li><Link to="/btech-projects/cse/major">Final Year Projects</Link></li>
                <li><Link to="/btech-projects/eee">IEEE Projects</Link></li>
              </ul>

              <ul>
                <li><Link to="/btech-projects/ece/minor">B.Tech ECE Mini Projects</Link></li>
                <li><Link to="/btech-projects/ece/major">B.Tech ECE Major Projects</Link></li>

                <li><Link to="/mtech-projects/ece/minor">M.Tech ECE Mini Projects</Link></li>
                <li><Link to="/mtech-projects/ece/major">M.Tech ECE Major Projects</Link></li>

                <li><Link to="/btech-projects/eee/minor">B.Tech EEE Mini Projects</Link></li>
                <li><Link to="/btech-projects/eee/major">B.Tech EEE Major Projects</Link></li>

                <li><Link to="/mtech-projects/eee/minor">M.Tech EEE Mini Projects</Link></li>
                <li><Link to="/mtech-projects/eee/major">M.Tech EEE Major Projects</Link></li>

                <li><Link to="/btech-projects/civil/minor">B.Tech Civil Mini Projects</Link></li>
                <li><Link to="/btech-projects/civil/major">B.Tech Civil Major Projects</Link></li>
              </ul>

              <ul>
                <li><Link to="/mtech-projects/civil/minor">M.Tech Civil Mini Projects</Link></li>
                <li><Link to="/mtech-projects/civil/major">M.Tech Civil Major Projects</Link></li>

                <li><Link to="/btech-projects/mech/minor">B.Tech Mechanical Mini Projects</Link></li>
                <li><Link to="/btech-projects/mech/major">B.Tech Mechanical Major Projects</Link></li>

                <li><Link to="/mtech-projects/mech/minor">M.Tech Mechanical Mini Projects</Link></li>
                <li><Link to="/mtech-projects/mech/major">M.Tech Mechanical Major Projects</Link></li>

                <li><Link to="/projects/mba/marketing">MBA Marketing Projects</Link></li>
                <li><Link to="/projects/mba/hr">MBA HR Projects</Link></li>
                <li><Link to="/projects/mba/finance">MBA Finance Projects</Link></li>

                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="footer-bottom">
          <p>© Copyright – 2025 TruProjects. All Rights Reserved.</p>
          <p><strong>Visitors Count:</strong> 1429990</p>
          <p className="disclaimer">
            Tru Projects is not associated or affiliated with IEEE in any way.
            The IEEE projects mentioned here are student projects inspired from
            IEEE publications and not official IEEE products.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
