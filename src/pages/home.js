import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-16">
        <Navbar />
      </div>
      <div className=" h-[calc(100vh-4rem)]">
        <Search />
      </div>
    </div>
  );
};

export default Home;
