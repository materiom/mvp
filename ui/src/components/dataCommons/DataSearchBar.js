import React from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function DataSearchBar() {
  return (
    <div className="flex p-3 bg-white rounded-full mb-5 items-center">
      <BiSearchAlt color="#609690" size="2em"/>
      <input className="flex flex-1 border-0 ml-3 focus:outline-none focus:border-0" type="text" placeholder="Search for anything..." />
      <div className=" w-36">
        <button className="blue-button">Search</button>
      </div>
    </div>
  );
}
