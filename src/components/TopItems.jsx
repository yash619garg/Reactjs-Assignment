import React, { useEffect, useState } from "react";
import { AllItems } from "../data";
import SingleItem from "./SingleItem";
import { useAppContext } from "../context/AppContext";
const TopItems = () => {
  const {
    items,
    setItems,
    searchTerm,
    records,
    prevPage,
    nextPage,
    setCurrentPage,
    currentPage,
    numbers,
  } = useAppContext();

  // distribute items in pages
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 4;
  // const lastIndex = currentPage * itemsPerPage;
  // const firstIndex = lastIndex - itemsPerPage;
  // const records = items.slice(firstIndex, lastIndex);
  // const nPage = Math.ceil(items.length / itemsPerPage);
  // const numbers = [...Array(nPage + 1).keys()].slice(1);

  // const prevPage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const nextPage = () => {
  //   if (currentPage !== nPage) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // search algorithm
  useEffect(() => {
    if (searchTerm) {
      const newItems = items.filter((item) => {
        return item.title.toLowerCase().startsWith(searchTerm.toLowerCase());
      });
      setItems(newItems);
    } else {
      setItems(AllItems);
    }
  }, [searchTerm, setItems]);

  return (
    <div className="allItems">
      {records.map((item, index) => {
        return <SingleItem key={item.id} item={item} index={index} />;
      })}

      <div className="select-page">
        <button onClick={prevPage} className="page-item">
          Prev
        </button>
        {numbers.map((n, i) => {
          return (
            <button
              className={`page-item ${currentPage === n && "active"}`}
              key={i}
              onClick={() => {
                setCurrentPage(n);
              }}
            >
              {n}
            </button>
          );
        })}
        <button onClick={nextPage} className="page-item">
          Next
        </button>
      </div>
    </div>
  );
};

export default TopItems;
