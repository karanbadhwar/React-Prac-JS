import React, { useRef } from "react";
import sublinks from "../data";
import { useGlobalContext } from "../Context";

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();

  //Find Method returns an object
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  // Filter Methods Returns an Array of Objects
  // const cP = sublinks.filter((item) => item.pageId === pageId);
  // console.log(cP);

  const subMenuContainer = useRef<HTMLDivElement | null>(null);

  const handleSubmenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(subMenuContainer.current);
    const submenu = subMenuContainer.current as HTMLDivElement;
    const result = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (
      clientX < result.left ||
      clientX > result.right ||
      clientY > result.bottom
    ) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleSubmenu}
      ref={subMenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length! > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((item) => {
          return (
            <a href={item.url} key={item.id}>
              {item.icon}
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
