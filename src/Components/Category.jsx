import React from "react";

const Category = ({ categories, handleCategory,catBtn }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-5">
      {categories.map((category) => (
        <button key={category.id}
          onClick={() => handleCategory(category.name)}
          className={`${catBtn==category.name?"btn btn-secondary":"btn btn-outline btn-secondary"}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
