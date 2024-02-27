import React from "react";
import SingleDeal from "../components/SingleDeal";
import { deals } from "../data";

const TodayDeal = () => {
  return (
    <div className="all-deals">
      <div className="all-deals-heading">Today's deals you might like for</div>
      <div className="all-deals-container">
        {deals.map((deal) => {
          return <SingleDeal key={deal.id} deal={deal} />;
        })}
      </div>
    </div>
  );
};

export default TodayDeal;
