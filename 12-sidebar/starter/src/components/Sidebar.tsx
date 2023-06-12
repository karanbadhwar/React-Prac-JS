import { useGlobalContext } from "../Context";
import logo from "../logo.svg";
import React from "react";
import { social, links } from "../data";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const { isSidebarOpen, sidebarClose } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="Coding addict" className="logo" />
        <button className="close-btn" onClick={sidebarClose}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href="#">
                {link.icon} {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((sociallink) => {
          return (
            <li key={sociallink.id}>
              <a href="#">{sociallink.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
