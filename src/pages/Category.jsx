import React from "react";
import Category_details from "../components/Category_details";

const Category = () => {
  return (
    <div className="category-page">
      <div className="category-page-heading">
        Discover Our Diverse Categories
      </div>
      <div className="category-page-subHead">
        Welcome to our website! We're thrilled to introduce you to the myriad of
        categories awaiting your exploration. Whether you're here to shop, learn
        or simply indulge your curiosity, we've meticulously curated a selection
        of categories to cater to your every need and interest.
      </div>
      <Category_details />
    </div>
  );
};

export default Category;
