import React, { useState } from "react";
import IData from "../Interface/IData";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/Ai";

function SingleQuestion({ title, info }: IData) {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        {showInfo ? (
          <AiOutlineMinus
            className="question-btn"
            onClick={() => setShowInfo(!showInfo)}
          />
        ) : (
          <AiOutlinePlus
            className="question-btn"
            onClick={() => setShowInfo(!showInfo)}
          />
        )}
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
