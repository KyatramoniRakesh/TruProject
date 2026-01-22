import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const [openMobileMenus, setOpenMobileMenus] = useState({
        btech: false,
        mtech: false,
    });


    const [openBranches, setOpenBranches] = useState({
        cse: false,
        ece: false,
        eee: false,
    });


    const [openProjects, setOpenProjects] = useState({
        btech: {
            cse: { major: false, mini: false },
            ece: { major: false, mini: false },
            eee: { major: false, mini: false },
        },
        mtech: {
            cse: { major: false, mini: false },
            ece: { major: false, mini: false },
            eee: { major: false, mini: false },
        },
    });

    return (
        <>
            {/* ================= TOP BAR ================= */}
            <div className="topbar">
                <div className="topbar-container">
                    <div className="topbar-left">
                        <span>91-9676190678</span>
                        <span>info@truprojects.in</span>
                        <div className="social-icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-x-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="topbar-right">
                        <button className="register-btn">Register Now</button>
                    </div>
                </div>
            </div>

            {/* ================= NAVBAR ================= */}
            <header className="navbar">
                <div className="nav-container">
                    <Link to="/" className="logo">
                        <img src={logo} alt="TruProjects" />
                    </Link>


                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                    </div>

                    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                        {/* ================= DESKTOP ================= */}
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>

                        <div className="nav-item has-mega">
                            <Link to="/btech-projects" className="nav-link">
                                B.Tech Projects <i className="fas fa-chevron-down"></i>
                            </Link>
                            <div className="mega-menu">
                                <div className="mega-container">
                                    <div className="mega-column">
                                        <h4>CSE</h4>
                                        <a href="#">Major Projects</a>
                                        <a href="#">Mini Projects</a>
                                    </div>
                                    <div className="mega-column">
                                        <h4>ECE</h4>
                                        <a href="#">Major Projects</a>
                                        <a href="#">Mini Projects</a>
                                    </div>
                                    <div className="mega-column">
                                        <h4>EEE</h4>
                                        <a href="#">Major Projects</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="nav-item has-mega">
                            <Link to="/mtech-projects" className="nav-link">
                                M.Tech Projects <i className="fas fa-chevron-down"></i>
                            </Link>
                            <div className="mega-menu">
                                <div className="mega-container">
                                    <div className="mega-column">
                                        <h4>CSE</h4>
                                        <a href="#">Major Projects</a>
                                        <a href="#">Mini Projects</a>
                                    </div>
                                    <div className="mega-column">
                                        <h4>ECE</h4>
                                        <a href="#">Major Projects</a>
                                        <a href="#">Mini Projects</a>
                                    </div>
                                    <div className="mega-column">
                                        <h4>EEE</h4>
                                        <a href="#">Major Projects</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= MOBILE ================= */}
                        <div className="mobile-only">

                            {["btech", "mtech"].map(type => (
                                <div className="mobile-item" key={type}>
                                    <div
                                        className="mobile-title"
                                        onClick={() =>
                                            setOpenMobileMenus(prev => ({
                                                ...prev,
                                                [type]: !prev[type],
                                            }))
                                        }
                                    >
                                        {type === "btech" ? "B.Tech Projects" : "M.Tech Projects"}
                                        <i className={`fas ${openMobileMenus[type] ? "fa-times" : "fa-plus"}`}></i>
                                    </div>

                                    {openMobileMenus[type] && (
                                        <div className="mobile-submenu">

                                            {["cse", "ece", "eee"].map(branch => (
                                                <div className="mobile-branch" key={branch}>
                                                    <div
                                                        className="mobile-branch-title"
                                                        onClick={() =>
                                                            setOpenBranches(prev => ({
                                                                ...prev,
                                                                [branch]: !prev[branch],
                                                            }))
                                                        }
                                                    >
                                                        {branch.toUpperCase()}
                                                        <i className={`fas ${openBranches[branch] ? "fa-times" : "fa-plus"}`}></i>
                                                    </div>

                                                    {openBranches[branch] && (
                                                        <div className="mobile-links">
                                                            {["major", "mini"].map(level => (
                                                                <div className="mobile-project" key={level}>
                                                                    <div
                                                                        className="mobile-project-title"
                                                                        onClick={() =>
                                                                            setOpenProjects(prev => ({
                                                                                ...prev,
                                                                                [type]: {
                                                                                    ...prev[type],
                                                                                    [branch]: {
                                                                                        ...prev[type][branch],
                                                                                        [level]: !prev[type][branch][level],
                                                                                    },
                                                                                },
                                                                            }))
                                                                        }
                                                                    >
                                                                        {level === "major" ? "Major Projects" : "Mini Projects"}
                                                                        <i className={`fas ${openProjects[type][branch][level] ? "fa-times" : "fa-plus"}`}></i>
                                                                    </div>

                                                                    {openProjects[type][branch][level] && (
                                                                        <div className="mobile-project-links">
                                                                            <a href="#">Project 1</a>
                                                                            <a href="#">Project 2</a>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}

                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>

                        <Link to="/research">Research Paper Writing & Publishing</Link>
                        <Link to="/documents">Document Writing</Link>
                        <Link to="/internships">Summer Internships</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
