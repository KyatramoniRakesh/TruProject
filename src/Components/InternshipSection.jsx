import "../CSS/InternshipSection.css";
import { internshipData } from "../Data/InternshipSectionData.js";

const InternshipSection = () => {
    return (
        <div className="main-section" >
            <section
                className="internship-section"
                style={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "0 auto",
                }}
            >
                <div className="internship-container">

                    <h1 className="internship-title">
                        {internshipData.title}
                    </h1>

                    {/* TAGS */}
                    <div className="internship-tags">
                        {internshipData.technologies.map((item, index) => (
                            <span key={index} className="internship-tag">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="divider" />

                    <p className="internship-highlight">
                        {internshipData.highlights}
                    </p>

                    <div className="divider" />

                    {/* INFO BOXES */}
                    <div className="internship-info">

                        <div className="info-card">
                            <h3>Training Fee</h3>
                            <div>
                                <p>One Day Internship : {internshipData.fee.oneDay}</p>
                                <p>45 Days Internship : {internshipData.fee.fortyFiveDays}</p>
                            </div>
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
        </div>
    );
};

export default InternshipSection;
