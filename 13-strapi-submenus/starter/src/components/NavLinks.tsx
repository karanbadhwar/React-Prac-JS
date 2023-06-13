import React from "react";
import sublinks from "../data";
import { useGlobalContext } from "../Context";

function NavLinks() {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        return (
          <button
            key={link.pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(link.pageId)}
          >
            {link.page}
          </button>
        );
      })}
    </div>
  );
}

export default NavLinks;
