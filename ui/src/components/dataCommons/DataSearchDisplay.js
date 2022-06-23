import React from "react";
import DataSearchResultItem from "./DataSearchResultItem";

export default function DataSearchDisplay() {
  return (
    <div className="flex flex-col  p-5 bg-white rounded-lg overflow-y-scroll">
      <div className="flex items-center justify-between mb-5">
        <div className="flex w-1/4 justify-start items-center">
          <h3 className="text-xl font-bold text-MatBlue">Data Commons</h3>
        </div>
      </div>
      <div className="flex flex-col max-h-full overflow-y-scroll custom-scrollbar">
        <div className="flex justify-between w-full">
          <div className="flex w-[22%]">
            <button className="blue-squircle-button">Featured materials</button>
          </div>
          <div className="flex w-[22%]">
            <button className="blue-squircle-button">Materials data</button>
          </div>
          <div className="flex w-[22%]">
            <button className="blue-squircle-button">Ashby Chart</button>
          </div>
          <div className="flex w-[22%]">
            <button className="blue-squircle-button">Scatter Plot</button>
          </div>
        </div>
        <hr className="w-full h-1 my-5 mx-auto" />
        <div className="flex flex-wrap w-full max-h-full overflow-y-scroll custom-scrollbar">
          <DataSearchResultItem />
          <DataSearchResultItem />
          <DataSearchResultItem />
          <DataSearchResultItem />
          <DataSearchResultItem />
          <DataSearchResultItem />
          <DataSearchResultItem />
          <DataSearchResultItem />
          <DataSearchResultItem />
          <DataSearchResultItem />
        </div>
      </div>
    </div>
  );
}
