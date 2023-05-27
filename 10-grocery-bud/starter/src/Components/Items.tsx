import React from "react";
import { NewItem } from "../App";
import SingleItem from "./SingleItem";

//Interface
interface Items {
  items: NewItem[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

function Items({ items, removeItem, editItem }: Items) {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
}

export default Items;
