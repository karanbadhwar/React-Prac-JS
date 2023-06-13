import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import NavLinks from "./NavLinks";

function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // console.log(e.target);
    // console.log((e.target as Element).classList.contains("nav-link"));
    const el = e.target as Element;
    if (!el.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo font-serif">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        {/* Nav Links */}
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
