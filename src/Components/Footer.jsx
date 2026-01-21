import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">

       
        <div className="footer-container">

         
          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              Welcome to Tru Projects. Tru Projects are being introduced to make
              a long way from its beginnings. We are the one source and efficient
              student oriented service provider for IT projects.
            </p>

            <h3 className="contact-title">Contact</h3>

            <div className="contact-item">
              <i className="fas fa-home"></i>
              <span>
                407, 4th Floor, Pavani Prestige (R.S Brothers) Building,
                Ameerpet, Opposite Image Hospital & Beside KLM Fashion Mall.
                City: Hyderabad, Telangana – 500016, India
              </span>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>91-9676190678</span>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@truprojects.in</span>
            </div>

            <div className="footer-socials">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-pinterest-p"></i>
            </div>
          </div>

          
          <div className="footer-col footer-links">
            <h3>Quick Links</h3>

            <div className="footer-links-grid">
              <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Trainings</li>
                <li>B.Tech Projects</li>
                <li>M.Tech Projects</li>
                <li>B.Tech CSE Mini Projects</li>
                <li>B.Tech CSE Major Projects</li>
                <li>M.Tech CSE Mini Projects</li>
                <li>M.Tech CSE Major Projects</li>
                <li>Final Year Projects</li>
                <li>IEEE Projects</li>
              </ul>

              <ul>
                <li>B.Tech ECE Mini Projects</li>
                <li>B.Tech ECE Major Projects</li>
                <li>M.Tech ECE Mini Projects</li>
                <li>M.Tech ECE Major Projects</li>
                <li>B.Tech EEE Mini Projects</li>
                <li>B.Tech EEE Major Projects</li>
                <li>M.Tech EEE Mini Projects</li>
                <li>M.Tech EEE Major Projects</li>
                <li>B.Tech Civil Mini Projects</li>
                <li>B.Tech Civil Major Projects</li>
              </ul>

              <ul>
                <li>M.Tech Civil Mini Projects</li>
                <li>M.Tech Civil Major Projects</li>
                <li>B.Tech Mechanical Mini Projects</li>
                <li>B.Tech Mechanical Major Projects</li>
                <li>M.Tech Mechanical Mini Projects</li>
                <li>M.Tech Mechanical Major Projects</li>
                <li>MBA Marketing Projects</li>
                <li>MBA HR Projects</li>
                <li>MBA Finance Projects</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

        </div>

       
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
