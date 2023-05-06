import React, { useState } from "react";
import data from "./data";
import List from "./components/List";
import Idata from "./Interfaces/Idata";

const App = () => {
  const [people, setPeople] = useState<Idata[]>(data);

  return (
    <main>
      <section className="container">
        <h3>{people?.length} Birthdays Today</h3>
        <List data={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
