import React from "react";
import { IJob } from "../App";
//Interface
interface Jobs {
  jobs: IJob[];
  currentItem: number;
  setCurrentItem: (value: number) => void;
}

function BtnContainer({ jobs, currentItem, setCurrentItem }: Jobs) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
