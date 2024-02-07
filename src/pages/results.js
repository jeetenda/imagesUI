import React from "react";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";

const Results = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-16">
        <Navbar />
      </div>
      <div className=" h-[calc(100vh-4rem)]">
        <SearchResults />
      </div>
    </div>
  );
};

export default Results;
