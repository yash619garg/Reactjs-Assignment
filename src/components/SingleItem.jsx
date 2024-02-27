import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { IoMdStarHalf } from "react-icons/io";

const SingleItem = ({ item, index }) => {
  const [read, setRead] = useState(false);
  const [review, setReview] = useState(false);
  const { title, image, about, rating, comment, main_highlight, name, Review } =
    item;
  const { Building_Responsive, cool, Docs, Why_We_love } = Review;
  // const obj = Object.entries(main_highlight);
  return (
    <div className="singleItem">
      {index < 2 && (
        <div className="singleItem-tags">
          {index === 0 ? <span>Best Choice</span> : <span>Best Value</span>}
        </div>
      )}
      <div className="singleItem-number">{index + 1}</div>
      <div className="singleItem-img">
        <img src={image} alt={title} />
        <span>{name}</span>
      </div>
      <div className="singleItem-details">
        <div className="singleItem-details-title">{title}</div>
        <div className="singleItem-details-about">{about}</div>
        <div className="singleItem-details-highlights">
          <div className="head">Main highlights </div>
          {!review ? (
            <div className="head-box">
              <span>
                {read ? main_highlight : main_highlight.substring(0, 200)}
              </span>
              <button
                onClick={() => {
                  setRead(!read);
                }}
              >
                {read ? "Show less" : "Show more"}
              </button>
            </div>
          ) : (
            <div className="ratingBox">
              <div className="ratingBox-1">
                <div>
                  {Building_Responsive} <span>Building Responsive</span>
                </div>
                <div>
                  {cool} <span>Cool</span>
                </div>
                <div>
                  {Docs} <span>Docs</span>
                </div>
              </div>
              <div className="ratingBox-2">
                <span>Why we Love it</span>
                {Why_We_love.map((item, index) => {
                  return (
                    <div key={index}>
                      {" "}
                      <CiCircleCheck />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="singleItem-rating">
        <div className="singleItem-rating-box">
          <span className="rate">{rating}</span>
          <span>{comment}</span>
          <div className="rating-star">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            {rating > 9.5 ? <IoMdStar /> : <IoMdStarHalf />}
          </div>
        </div>
        <button
          className="view-btn"
          onClick={() => {
            setReview(!review);
          }}
        >
          view
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
