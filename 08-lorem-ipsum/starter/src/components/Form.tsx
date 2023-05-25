import React, { useState } from "react";
import data from "../data";
// import { nanoid } from "nanoid";
import { v4 } from "uuid";

//Type
type Data = string[];

function Form() {
  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState<Data>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <div>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          const id = v4();
          return <p key={id}>{item}</p>;
        })}
      </article>
    </div>
  );
}

export default Form;
