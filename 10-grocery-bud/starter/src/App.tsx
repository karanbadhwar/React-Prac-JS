import React, { useState } from "react";
import Form from "./Components/Form";
import { nanoid } from "nanoid";
import { toast, ToastContainer } from "react-toastify";
import Items from "./Components/Items";

//Interface
export interface NewItem {
  name: string;
  id: string;
  completed: boolean;
}

//Local Storage Functions
const setlocalStorage = (items: NewItem[]): void => {
  localStorage.setItem("list", JSON.stringify(items));
};

// const getLocalStorage = () => {
//   let list: string | null | [] = localStorage.getItem("list");
//   let listArr: NewItem[];
//   if (list) {
//     listArr = JSON.parse(list);
//     return listArr;
//   } else {
//     listArr = [];
//   }
//   return listArr;
// };

// Alternative for getLocalStorage
const defaultList: NewItem[] = JSON.parse(localStorage.getItem("list") || "[]");
const App = () => {
  const [items, setItems] = useState<NewItem[]>(defaultList);

  //ADD ITEM FUNCTION
  const addItem = (item: string) => {
    const newItem: NewItem = {
      name: item,
      id: nanoid(),
      completed: false,
    };
    const newItemArr = [...items, newItem];
    setItems(newItemArr);
    setlocalStorage(newItemArr);
    toast.success("Item Added");
  };

  //REMOVE ITEM FUNCTION
  const removeItem = (itemId: string): void => {
    const newItemsArr = items.filter((item) => itemId !== item.id);
    setItems(newItemsArr);
    setlocalStorage(newItemsArr);
    toast.error("Item Removed");
  };

  //EDIT ITEM FUNCTION
  const editItem = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      } else {
        return item;
      }
    });
    setItems(newItems);
    setlocalStorage(newItems);
    toast.info("Item Edited");
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
