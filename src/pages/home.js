import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Search />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
