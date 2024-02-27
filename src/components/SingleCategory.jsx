import React from "react";

const SingleCategory = ({ category }) => {
  const { title, about } = category;
  return (
    <div className="SingleCat">
      <div className="SingleCat-title">{title}</div>
      <div className="SingleCat-about">{about}</div>
    </div>
  );
};

export default SingleCategory;
