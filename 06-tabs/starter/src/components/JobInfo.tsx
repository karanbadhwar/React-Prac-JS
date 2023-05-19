import React from "react";
import { IJob } from "../App";
import JobDuties from "./JobDuties";
interface Jobs {
  jobs: IJob[];
  currentItem: number;
}

function JobInfo({ jobs, currentItem }: Jobs) {
  const { title, company, duties, dates } = jobs[currentItem];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <JobDuties duties={duties} />
    </article>
  );
}

export default JobInfo;
