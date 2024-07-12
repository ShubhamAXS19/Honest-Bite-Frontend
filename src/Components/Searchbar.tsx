import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="relative m-2">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IoSearchSharp size={20} className="text-gray-500" />
      </div>
      <input
        type="text"
        className="pl-10 pr-4 py-2 w-full rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
