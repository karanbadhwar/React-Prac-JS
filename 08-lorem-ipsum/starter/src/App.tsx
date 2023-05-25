import React, { useState } from "react";
import Form from "./components/Form";
const App = () => {
  const [count, setCount] = useState<number>(1);
  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <Form />
    </section>
  );
};
export default App;
