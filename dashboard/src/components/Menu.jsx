import logoImg from "../../src/assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const userName = localStorage.getItem("userName") || "USER";

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    const loginUrl =
      import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173/#/login";
    window.location.href = loginUrl;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu Selected";

  return (
    <div className="menu-container">
      <img src={logoImg} alt="logo" style={{ width: "30px" }} />
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <div className={`menus ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleLogout} title="Logout">
          <div className="avatar">{userName.slice(0, 2).toUpperCase()}</div>
          <p className="username">{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
