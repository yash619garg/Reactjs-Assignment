import React from "react";
import { deals } from "../data";
import SingleDeal from "./SingleDeal";

const RelatedDeals = () => {
  return (
    <div className="all-deals">
      <div className="all-deals-heading">related deals you might like for</div>
      <div className="all-deals-container">
        {deals.map((deal) => {
          return <SingleDeal key={deal.id} deal={deal} />;
        })}
      </div>
    </div>
  );
};

export default RelatedDeals;
