// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import React from "react";
import { useGlobalContext } from "./components/Context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "6rem" }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
