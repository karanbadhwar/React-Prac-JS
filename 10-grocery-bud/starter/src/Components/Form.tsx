import React, { useState } from "react";
import { toast } from "react-toastify";

//interface
interface IAddItem {
  addItem: (item: string) => void;
}

function Form({ addItem }: IAddItem) {
  const [newItem, setNewItem] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("Please provide a value");
      return;
    }
    addItem(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          name=""
          id=""
          value={newItem}
          className="form-input"
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add New Item"
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default Form;
