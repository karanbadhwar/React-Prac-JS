import React from "react";
import { useGlobalContext } from "../Context";
import { FaBars } from "react-icons/fa";

function Home() {
  const { sidebarOpen, modalOpen } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={sidebarOpen}>
        <FaBars />
      </button>
      <button className="btn" onClick={modalOpen}>
        Show Modal
      </button>
    </main>
  );
}

export default Home;
