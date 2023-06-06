import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => {
    // console.log(typeof linksRef.current);
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef?.current?.getBoundingClientRect().height}px`
      : 0,
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Social Links */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            return (
              <li key={socialIcon.id}>
                <a href={socialIcon.url}>{socialIcon.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
