import React from "react";
interface Title {
  title: string;
}

function Title({ title }: Title) {
  return (
    <div className="title">
      <h2>{title || "Default Title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
}

export default Title;
