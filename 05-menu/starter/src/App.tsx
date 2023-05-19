import React, { useState } from "react";
import menu from "./data";
import IMenuItems from "./Interface/IData";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const tempCategories: string[] = menu.map((item) => item.category);
const unique: Set<string> = new Set(tempCategories);

//Alternative
// tempCategories.forEach((item) => unique.add(item));
const tempItems: string[] = ["all", ...unique];

//One Liner Alternative
// const allCategories = ["all", ...new Set(tempCategories)];
// console.log(allCategories);

const App = () => {
  const [menuItems, setMenuitems] = useState<IMenuItems[]>(menu);
  const [categories, setCategories] = useState<string[]>(tempItems);

  const filterFunc = (category: string): void => {
    if (category === "all") {
      setMenuitems(menu);
      return;
    }
    const filteredItems = menu.filter(
      (item: IMenuItems) => item.category === category
    );

    setMenuitems(filteredItems);
  };
  return (
    <main>
      <section className="menu">
        <Title title="Our Menu" />
        <Categories categories={categories} filterFunc={filterFunc} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
