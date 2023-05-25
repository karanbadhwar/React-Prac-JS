import React from "react";
import { IColor } from "../App";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

//Interface
interface ColorProp {
  colors: IColor[];
}

function ColorList({ colors }: ColorProp) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        const id = nanoid();
        return <SingleColor key={id} color={color} index={index} />;
      })}
    </section>
  );
}

export default ColorList;
