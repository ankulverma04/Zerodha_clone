import "../App.css";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen); // Toggle menu
  const handleClick = () => setIsOpen(false);    // Close menu on link click

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={handleClick}>
          <img src={logo} alt="MainLogo" style={{ width: "30%", marginLeft: "10px" }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"} // CHANGE: dynamic
          aria-label="Toggle navigation"
          onClick={handleToggle} // CHANGE: React state handle
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 align-item-center">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/product", label: "Products" },
              { path: "/pricing", label: "Pricing" },
              { path: "/support", label: "Support" },
              { path: "/signup", label: "Signup" },
            ].map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={handleClick} // CHANGE: close menu on link click
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;