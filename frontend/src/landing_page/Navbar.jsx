import "../App.css";
import { Link } from "react-router-dom";
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="MainLogo"
            className=""
            style={{ width: "30%", marginLeft: "10px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 align-item-center ">
            <li className="nav-item ">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
