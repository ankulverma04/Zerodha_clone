import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="MainLogo"
            className=""
            style={{ width: "30%",marginLeft:"10px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon d-flex" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 align-item-center ">
            <li className="nav-item ">
              <Link to="/" className="">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
