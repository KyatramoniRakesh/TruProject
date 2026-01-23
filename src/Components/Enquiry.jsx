import { useState } from "react";
import "../CSS/Enquiry.css";

const QuickEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    city: "",
    course: "B.Tech",
    branch: "CSE",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="quick-enquiry">
      <div className="quick-enquiry-container">

        <h2 className="quick-title">
          QUICK <span>ENQUIRY</span>
        </h2>

        <form className="quick-form" onSubmit={handleSubmit}>

          {/* Name */}
          <div className="form-group full">
            <label>
              Name <span>(Required)</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name of the Student"
              required
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>
              Phone <span>(Required)</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>
              Email <span>(Required)</span>
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          {/* College */}
          <div className="form-group">
            <label>
              College Name <span>(Required)</span>
            </label>
            <input
              type="text"
              name="college"
              required
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <div className="form-group">
            <label>
              City <span>(Required)</span>
            </label>
            <input
              type="text"
              name="city"
              required
              onChange={handleChange}
            />
          </div>

          {/* Course */}
          <div className="form-group">
            <label>
              Course <span>(Required)</span>
            </label>
            <select name="course" onChange={handleChange}>
              <option>B.Tech</option>
              <option>M.Tech</option>
            </select>
          </div>

          {/* Branch */}
          <div className="form-group">
            <label>
              Branch <span>(Required)</span>
            </label>
            <select name="branch" onChange={handleChange}>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>CIVIL</option>
              <option>MECH</option>
            </select>
          </div>

          {/* Submit */}
          <button className="submit-btn" type="submit">
            Submit
          </button>

        </form>
      </div>
    </section>
  );
};

export default QuickEnquiry;
