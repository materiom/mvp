// Dependencies
import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";

// Pictures
import bgPicture from "./../../pictures/registration.jpg";

export default function DataSearchResultItem() {
  // set initial state
  const [checked, handleCheck] = useState(false);

  return (
    <div className="flex-[1_0_22%] p-3">
      <div className="aspect-square flex flex-col items-end ">
        <div
          onClick={() => handleCheck(!checked)}
          className={
            "w-4 h-4 flex justify-center items-center border-[1px] rounded-full relative top-6 right-2 z-10 transition duration-300 " +
            (checked ? " bg-MatTeal border-MatTeal" : "border-MatLightGrey")
          }
        >
          <BsCheck color={checked ? "#fff" : "#B7B5B5"} />
        </div>
        <img src={bgPicture} className="h-full w-full rounded-t-lg" />
        <div className="bg-MatLightTeal relative bottom-0 w-full h-1/6 flex justify-center items-center">
          <h5 className="text-sm font-bold text-MatBlue whitespace-nowrap overflow-hidden text-ellipsis w-full max-h-[25px] w-5/6 max-w-[200px]">
            Carrageenan Film Ca03 with biomolecular stuff
          </h5>
        </div>
      </div>
    </div>
  );
}
