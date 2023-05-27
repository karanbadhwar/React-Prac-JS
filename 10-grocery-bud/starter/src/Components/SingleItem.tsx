import React, { useState } from "react";
import { NewItem } from "../App";

//Interface
interface ISingleItem {
  item: NewItem;
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

function SingleItem({ item, removeItem, editItem }: ISingleItem) {
  const [isCheck, setIsCheck] = useState<boolean>(item.completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isCheck}
        onChange={() => {
          setIsCheck(!isCheck);
          editItem(item.id);
        }}
      />
      <p
        style={{
          textDecoration: isCheck ? "line-through" : "none",
          textTransform: "capitalize",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={(e) => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default SingleItem;
