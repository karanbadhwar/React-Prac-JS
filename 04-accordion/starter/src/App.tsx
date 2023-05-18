import React, { useState } from "react";
import IData from "./Interface/IData";
import data from "./data";
import SingleQuestion from "./componenets/SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState<IData[]>(data);
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {data.map((question) => {
          return <SingleQuestion {...question} key={question.id} />;
        })}
      </section>
    </main>
  );
};
export default App;
