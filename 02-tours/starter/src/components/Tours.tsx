import React from "react";
import IData from "../interface/IData";
import Tour from "./Tour";
interface Tours {
  tours: IData[];
  removeTours: (id: string) => void;
}

function Tours({ tours, removeTours }: Tours) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour {...tour} removeTours={removeTours} key={tour.id} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
