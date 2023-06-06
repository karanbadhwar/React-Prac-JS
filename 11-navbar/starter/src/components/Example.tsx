import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";

function Example() {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => {
    console.log(linksRef.current?.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef?.current?.getBoundingClientRect().height}px`
      : "0px",
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
        <ul className="links" ref={linksRef} style={linkStyles}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Example;
