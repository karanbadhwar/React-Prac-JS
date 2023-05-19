import React, { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";
const url = "https://course-api.com/react-tabs-project";
export interface IJob {
  id: string;
  order: number;
  title: string;
  company: string;
  dates: string;
  duties: string[];
}

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setJobs(fetchedData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
