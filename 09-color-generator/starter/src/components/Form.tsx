import React, { FormEvent, useState } from "react";

//Call Signature Type
type AddColor = {
  addColor: (color: string) => void;
};

function Form({ addColor }: AddColor) {
  const [color, setColor] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button
          type="submit"
          className="btn"
          style={{
            background: color,
            color: color === "#ffffff" ? "black" : "white",
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
