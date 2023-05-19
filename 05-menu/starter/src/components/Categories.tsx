import React from "react";

function Categories({
  categories,
  filterFunc,
}: {
  categories: string[];
  filterFunc: (category: string) => void;
}) {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            type="button"
            key={category}
            onClick={() => filterFunc(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
