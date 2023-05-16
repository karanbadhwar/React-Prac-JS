import React, { useState } from "react";
import IData from "./Interface/IData";
import data from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const App = () => {
  const [people, setPeople] = useState<IData[]>(data);
  const [index, setIndex] = useState<number>(0);
  const { image, id, job, text, name } = people[index];

  const checkNumber = (num: number) => {
    if (num > data.length - 1) {
      return 0;
    }
    if (num < 0) {
      return data.length - 1;
    }
    return num;
  };

  const nextPerson = () => {
    setIndex((prev) => {
      let num = prev + 1;
      return checkNumber(num);
    });
  };
  const prevPerson = () => {
    setIndex((prev) => {
      let num = prev - 1;
      return checkNumber(num);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Suprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
