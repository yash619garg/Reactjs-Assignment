// import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";
const path = "home > hosting for all > hosting > hosting 6 > hosting 5 ";

const Tabs = () => {
  const { CategoryFilterItems, AllCategory } = useAppContext();

  return (
    <div className="filter">
      <div className="filter-buttons">
        {AllCategory.map((cat, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                CategoryFilterItems(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="filter-path">{path}</div>
    </div>
  );
};

export default Tabs;
