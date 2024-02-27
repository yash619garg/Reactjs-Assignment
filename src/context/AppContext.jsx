import React, { createContext, useContext, useEffect, useState } from "react";
import { AllItems } from "../data";
const appContext = createContext();
const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState(AllItems);
  const categories = AllItems.map((item) => {
    return item.category;
  });
  const AllCategory = [...new Set(categories)];

  // useEffect(() => {
  //   CategoryFilterItems("Tools");
  // }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = items.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(items.length / itemsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const CategoryFilterItems = (category) => {
    if (category === "All") {
      setCurrentPage(1);
      setItems(AllItems);
    } else {
      const newItems = AllItems.filter((item) => {
        return item.category === category;
      });
      setCurrentPage(1);
      setItems(newItems);
    }
  };

  return (
    <appContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        items,
        setItems,
        AllCategory,
        CategoryFilterItems,
        records,
        nextPage,
        prevPage,
        setCurrentPage,
        currentPage,
        numbers,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};

export default AppProvider;
