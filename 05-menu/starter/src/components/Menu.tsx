import React from "react";
import IMenuItems from "../Interface/IData";
import MenuItem from "./MenuItem";
import menu from "../data";
interface MenuData {
  items: IMenuItems[];
}

function Menu({ items }: MenuData) {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
}

export default Menu;
