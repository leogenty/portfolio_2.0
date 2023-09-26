import React, { useState } from "react";
import "../../styles/css/menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`menu-container ${menuOpen ? "open" : ""}`}>
      <div className={`menu-button ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="horizontal-line"></div>
        <div className="horizontal-line"></div>
      </div>
      <div className="menu-content">
        Home
        About Me
        My Works
        Contact
      </div>
    </div>
  );
};

export default Menu;
