import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import RelatedDeals from "../components/RelatedDeals";
import TopItems from "../components/TopItems";
import SignUp from "../components/signUp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <TopItems />
      <RelatedDeals />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Home;
