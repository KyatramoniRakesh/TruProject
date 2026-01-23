import { useState, useEffect, useRef } from "react";
import "../CSS/InternshipSection.css";
import { internshipData } from "../Data/InternshipSectionData";

const InternshipSection = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const sectionRef = useRef(null);

  
  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);

   
    window.history.pushState(
      { domainId: domain.id },
      "",
      `?domain=${domain.id}`
    );

  };


  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const domainId = params.get("domain");

      if (!domainId) {
        
        setSelectedDomain(null);
        return;
      }

      const domain = internshipData.domains.find(
        (d) => d.id === domainId
      );
      setSelectedDomain(domain || null);
    };

    window.addEventListener("popstate", handlePopState);

    
    handlePopState();

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="main-section">
      <section className="internship-section" ref={sectionRef}>
        <div className="internship-container">

         
          <h1 className="internship-title">
            {selectedDomain
              ? `${selectedDomain.label.toUpperCase()} SUMMER INTERNSHIP PROGRAM ${selectedDomain.year}`
              : internshipData.title}
          </h1>

          
          <div className="internship-tags">
            {!selectedDomain &&
              internshipData.domains.map((domain) => (
                <span
                  key={domain.id}
                  className="internship-tag"
                  onClick={() => handleDomainClick(domain)}
                >
                  {domain.label}
                </span>
              ))}

            {selectedDomain && (
              <span className="internship-tag single-domain">
                {selectedDomain.label.toUpperCase()}
              </span>
            )}
          </div>

          <div className="divider" />

          <p className="internship-highlight">
            {internshipData.highlights}
          </p>

          <div className="divider" />

         
          <div className="internship-info">
            <div className="info-card">
              <h3>Training Fee</h3>
              <p>
                {selectedDomain
                  ? selectedDomain.fee
                  : "One Day Internship : Rs. 3,500/-"}
              </p>
              {!selectedDomain && (
                <p>45 Days Internship : Rs. 6,500/-</p>
              )}
            </div>

            <div className="info-card">
              <h3>{internshipData.duration}</h3>
              <button className="register-btn">Register Now</button>
            </div>

            <div className="info-card">
              <h3>Contact Us</h3>
              <p>
                {internshipData.contact.name} :{" "}
                {internshipData.contact.phone}
              </p>

              <div className="summer-social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-x-twitter"></i>
              </div>
            </div>
          </div>

          <p className="internship-address">
            <strong>HYDERABAD</strong><br />
            {internshipData.address}
          </p>
        </div>
      </section>

      
      {selectedDomain && (
        <section className="about-domain-section">
          <div className="about-container">
            <h2 className="about-title">
              About <span>{selectedDomain.label}</span>
            </h2>
            <p className="about-description">
              {selectedDomain.about}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default InternshipSection;
