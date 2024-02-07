import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative mt-2 rounded-md shadow-sm ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <IoSearch size={15} color="white"/>
          </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 bg-[#125086]  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
 <MdOutlineMenuOpen size={18} color="white"/>
        </div>
      </div>
    </div>
  );
};

export default Search;
