import React from "react";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";


const Results = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <SearchResults />
      </div>
     <Footer/>
    </div>
  );
};

export default Results;
