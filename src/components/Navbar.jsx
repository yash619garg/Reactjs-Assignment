import React, { useState } from "react";
import { HiOutlineSortDescending } from "react-icons/hi";
import { HiOutlineSortAscending } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const { setSearchTerm } = useAppContext();
  return (
    <>
      <div className="navbar">
        <div className="navbar-box-1">
          <div className="navbar-search">
            <div className="navbar-search-icon">
              <IoSearchOutline />
            </div>
            <input
              type="search"
              name="search"
              className="navbar-search-input"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <HiOutlineSortAscending /> : <HiOutlineSortDescending />}
          </button>
        </div>
        <div
          className="navbar-box-2 "
          style={{
            display: `${toggle ? "flex" : "none"}`,
          }}
        >
          <ul className="navbar-links-box">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Categories</Link>
            </li>
            <li>
              <Link to="/todayDeal">Today's Deals</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
