import React, { useState } from "react";
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

//Interface
export interface IColor {
  rgb: number[];
  type: string;
  weight: number;
  hex: string;
}

const App = () => {
  const [colors, setColors] = useState<IColor[]>(new Values("#f15025").all(10));

  const addColor = (color: string) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error: any) {
      if (!color) {
        return toast.error("Please Provide a Value");
      }
      toast.error("Please Follow the HEX Format");
      // console.log(error);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
