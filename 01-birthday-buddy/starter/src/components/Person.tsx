import React from "react";
import Idata from "../Interfaces/Idata";

function Person({ id, age, name, image }: Idata) {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} Years</p>
      </div>
    </article>
  );
}

export default Person;
