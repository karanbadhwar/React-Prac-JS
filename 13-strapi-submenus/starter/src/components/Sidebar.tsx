import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import sublinks from "../data";

function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            return (
              <article key={link.pageId}>
                <h4>{link.page}</h4>
                <div className="sidebar-sublinks grid-cols-2">
                  {link.links.map((sublinks) => {
                    return (
                      <a href={sublinks.url} key={sublinks.id}>
                        {sublinks.icon}
                        {sublinks.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
