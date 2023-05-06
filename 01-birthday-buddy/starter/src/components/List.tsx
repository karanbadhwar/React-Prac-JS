import React from "react";
import Person from "./Person";
import Idata from "../Interfaces/Idata";
interface IPeople {
  data: Idata[];
}

function List({ data }: IPeople) {
  return (
    <>
      {data.map((person: Idata) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
}

export default List;
