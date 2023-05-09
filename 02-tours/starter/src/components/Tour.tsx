import React, { useState } from "react";
import IData from "../interface/IData";
type removeTour = { removeTours: (id: string) => void };

function Tour({
  id,
  info,
  name,
  image,
  price,
  removeTours,
}: IData & removeTour) {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? `${info} ` : `${info.substring(0, 200)}... `}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? `Show Less` : "Read More"}
          </button>
        </p>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => removeTours(id)}
        >
          Not Interested!
        </button>
      </div>
    </article>
  );
}

export default Tour;
