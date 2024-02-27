import React from "react";
import SingleCategory from "./SingleCategory";
import { CategoryDetails } from "../data";

const Category_details = () => {
  return (
    <div className="all-category-container">
      {CategoryDetails.map((cat) => {
        return <SingleCategory key={cat.id} category={cat} />;
      })}
    </div>
  );
};

export default Category_details;
