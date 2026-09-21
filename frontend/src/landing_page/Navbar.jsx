import "../App.css";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 px-3 fixed-top shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={handleClick}>
          <img src={logo} alt="MainLogo" className="nav-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 gap-lg-4">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/product"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pricing"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/support"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Support
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/signup"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                onClick={handleClick}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
