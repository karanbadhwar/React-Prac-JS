import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

//Interfaces
interface Duty {
  duties: string[];
}

function JobDuties({ duties }: Duty) {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}

export default JobDuties;
