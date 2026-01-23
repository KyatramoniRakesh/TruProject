import { useState, useEffect } from "react";
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

  /* ================= CLOSE ALL ================= */
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMobileMenus({ btech: false, mtech: false });
    setOpenBranches({ cse: false, ece: false, eee: false });
  };

  /* ================= AUTO CLOSE ON DESKTOP ================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <span>91-9676190678</span>
            <span>info@truprojects.in</span>
          </div>
          <div className="topbar-right">
            <Link to="/enquiry" onClick={closeMenu}>
              <button className="register-btn">Register Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          {/* LOGO */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="TruProjects" />
          </Link>

          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

            {/* ================= DESKTOP LINKS ================= */}
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About Us</Link>

            {/* ================= BTECH MEGA ================= */}
            <div className="nav-item has-mega">
              <Link to="/btech" className="nav-link">
                B.Tech Projects <i className="fas fa-chevron-down"></i>
              </Link>

              <div className="mega-menu">
                <div className="mega-container">
                  <div className="mega-column">
                    <h4>CSE</h4>
                    <Link to="/btech/cse/major">Major Projects</Link>
                    <Link to="/btech/cse/minor">Mini Projects</Link>
                  </div>

                  <div className="mega-column">
                    <h4>ECE</h4>
                    <Link to="/btech/ece/major">Major Projects</Link>
                    <Link to="/btech/ece/minor">Mini Projects</Link>
                  </div>

                  <div className="mega-column">
                    <h4>EEE</h4>
                    <Link to="/btech/eee/major">Major Projects</Link>
                    <Link to="/btech/eee/minor">Mini Projects</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= MTECH MEGA ================= */}
            <div className="nav-item has-mega">
              <Link to="/mtech" className="nav-link">
                M.Tech Projects <i className="fas fa-chevron-down"></i>
              </Link>

              <div className="mega-menu">
                <div className="mega-container">
                  <div className="mega-column">
                    <h4>CSE</h4>
                    <Link to="/mtech/cse/major">Major Projects</Link>
                    <Link to="/mtech/cse/minor">Mini Projects</Link>
                  </div>

                  <div className="mega-column">
                    <h4>ECE</h4>
                    <Link to="/mtech/ece/major">Major Projects</Link>
                    <Link to="/mtech/ece/minor">Mini Projects</Link>
                  </div>

                  <div className="mega-column">
                    <h4>EEE</h4>
                    <Link to="/mtech/eee/major">Major Projects</Link>
                    <Link to="/mtech/eee/minor">Mini Projects</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= MOBILE ACCORDION ================= */}
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
                    <i className={`fas ${openMobileMenus[type] ? "fa-minus" : "fa-plus"}`}></i>
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
                            <i className={`fas ${openBranches[branch] ? "fa-minus" : "fa-plus"}`}></i>
                          </div>

                          {openBranches[branch] && (
                            <div className="mobile-links">
                              <Link
                                to={`/${type}/${branch}/major`}
                                onClick={closeMenu}
                              >
                                Major Projects
                              </Link>
                              <Link
                                to={`/${type}/${branch}/minor`}
                                onClick={closeMenu}
                              >
                                Mini Projects
                              </Link>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ================= OTHER LINKS ================= */}
            <Link to="/research" onClick={closeMenu}>Research Paper Writing</Link>
            <Link to="/documents" onClick={closeMenu}>Document Writing</Link>
            <Link to="/summer" onClick={closeMenu}>Summer Internships</Link>
            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>

          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
