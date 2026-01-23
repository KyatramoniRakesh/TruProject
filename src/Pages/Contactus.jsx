import React, { useState } from "react";
import "../CSS/Contactus.css";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

function Contactus() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    college: "",
    city: "",
    course: "B.Tech",
    branch: "CSE",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.mobile.trim())
      newErrors.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10-digit number";

    if (!formData.college.trim())
      newErrors.college = "College name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Form submitted successfully!");
    setFormData({
      fullname: "",
      email: "",
      mobile: "",
      college: "",
      city: "",
      course: "B.Tech",
      branch: "CSE",
    });
    setErrors({});
  };

  return (
    <>
      <div className="branch-banner">
        <h1>Contact Us</h1>
      </div>

      <section className="contact-section">
        <div className="contact-grid">

          {/* ================= FORM ================= */}
          <div className="contact-form">
            <h2>
              INTERESTED IN <span>DISCUSSING?</span>
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group full">
                <label>
                  Name <span className="required">(Required)</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Name of the Student"
                  value={formData.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && <small className="error">{errors.fullname}</small>}
              </div>

              <div className="form-group">
                <label>
                  Phone <span className="required">(Required)</span>
                </label>
                <input
                  type="text"
                  name="mobile"
                  maxLength="10"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <small className="error">{errors.mobile}</small>}
              </div>

              <div className="form-group">
                <label>
                  Email <span className="required">(Required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>

              <div className="form-group">
                <label>
                  College Name <span className="required">(Required)</span>
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                />
                {errors.college && <small className="error">{errors.college}</small>}
              </div>

              <div className="form-group">
                <label>
                  City <span className="required">(Required)</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <small className="error">{errors.city}</small>}
              </div>

              <div className="form-group">
                <label>Course</label>
                <select name="course" value={formData.course} onChange={handleChange}>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>MCA</option>
                  <option>MBA</option>
                  <option>BSc</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Branch</label>
                <select name="branch" value={formData.branch} onChange={handleChange}>
                  <option>CSE</option>
                  <option>ECE</option>
                  <option>IT</option>
                  <option>AI-ML</option>
                  <option>Cyber Security</option>
                  <option>Other</option>
                </select>
              </div>

              <button className="submit-btn">Submit</button>
            </form>
          </div>

          {/* ================= ADDRESS ================= */}
          <div className="contact-info">
            <h2>
              OUR <span>ADDRESS</span>
            </h2>

            <div className="info-card">
              <FaPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>91-9676190678</p>
              </div>
            </div>

            <div className="info-card">
              <FaLocationDot className="icon" />
              <div>
                <h4>Address</h4>
                <p>
                  407, 4th Floor, Pavani Prestige (R.S Brothers) Building,
                  Ameerpet, Hyderabad – 500016, India
                </p>
              </div>
            </div>

            <div className="info-card">
              <MdEmail className="icon" />
              <div>
                <h4>E-Mail</h4>
                <p>info@truprojects.in</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contactus;
