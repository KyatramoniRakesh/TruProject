import React from 'react';
import { useState } from 'react';
import '../CSS/Contactus.css';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const Validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.fullname.trim()) {
            newErrors.fullname = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
            isValid = false;
        } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter valid 10-digit Indian mobile number";
            isValid = false;
        }

        if (!formData.college.trim()) {
            newErrors.college = "College name is required";
            isValid = false;
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = Validate();
        if (isValid) {
            console.log("Form Data:", formData);
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
        }
    };

    const isFormIncomplete = Object.values(formData).some(
        (val) => !val.trim()
    );
    return (
        <>
            <div className="branch-banner">
                <h1>Contact us </h1>
            </div>
            <section className="contact-section">
                <div className="contact-grid">


                    <div className="contact-form">
                        <h2>INTERESTED IN <span>DISCUSSING?</span></h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group full">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder='Name of the student'
                                    value={formData.fullname}
                                    onChange={handleChange}
                                />
                                {errors.fullname && <small className="error">{errors.fullname}</small>}
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
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
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small className="error">{errors.email}</small>}
                            </div>

                            <div className="form-group">
                                <label>College Name</label>
                                <input
                                    type="text"
                                    name="college"
                                    value={formData.college}
                                    onChange={handleChange}
                                />
                                {errors.college && <small className="error">{errors.college}</small>}
                            </div>

                            <div className="form-group">
                                <label>City</label>
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
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                >
                                    {/* <option value="">Select</option> */}
                                    <option>B.Tech</option>
                                    <option>M.Tech</option>
                                    <option>MCA</option>
                                    <option>MBA</option>
                                    <option>BCom</option>
                                    <option>BSC</option>
                                    <option>Other</option>
                                </select>
                                {errors.course && <small className="error">{errors.course}</small>}
                            </div>

                            <div className="form-group">
                                <label>Branch</label>
                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                >
                                    {/* <option value="">Select</option> */}
                                    <option>CSE</option>
                                    <option>ECE</option>
                                    <option>AI-ML</option>
                                    <option>IT</option>
                                    <option>Cyber Security</option>
                                    <option>IOT</option>
                                    <option>Other</option>
                                </select>
                                {errors.branch && <small className="error">{errors.branch}</small>}
                            </div>

                            <button
                                className="submit-btn"
                                disabled={isFormIncomplete}
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* ADDRESS */}
                    <div className="contact-info">
                        <h2>OUR <span>ADDRESS</span></h2>

                        <div className="info-card">
                            <span className="icon"><FaPhone /></span>
                            <div className='ad-content'>
                                <h4 className='ad-head'>Phone</h4>
                                <p>9676190678</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <span className="icon"><FaLocationDot /></span>
                            <div className='ad-content'>
                                <h4 className='ad-head' >Address</h4>
                                <p>
                                    407, 4th Floor, Pavani Prestige (R.S Brothers) Building, Ameerpet,
                                    Opposite Image Hospital & Beside KLM Fashion Mall.
                                    Hyderabad, Telangana – 500016, India
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <span className="icon"><MdEmail /></span>
                            <div className='ad-content'>
                                <h4 className='ad-head'>E-Mail</h4>
                                <p>info@truprojects.in</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5677383316847!2d78.44512297493586!3d17.432520083462382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c94499946b%3A0xac54154f431ae675!2sR.S.%20Brothers!5e0!3m2!1sen!2sin!4v1769064358655!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RS Brothers Location"
            />

        </>
    )
}

export default Contactus