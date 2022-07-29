import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";

import bgPicture from "./../../pictures/registration.jpg";

function DataSearchResultItem() {
  const [checked, handleCheck] = useState(false);
  return (
    <div className="flex-[1_0_22%] p-3">
      <div className="flex aspect-square flex-col items-end ">
        <div
          onClick={() => handleCheck(!checked)}
          className={
            "relative top-6 right-2 z-10 flex h-4 w-4 items-center justify-center rounded-full border-[1px] transition duration-300 " +
            (checked ? " border-MatTeal bg-MatTeal" : "border-MatLightGrey")
          }
        >
          <BsCheck color={checked ? "#fff" : "#B7B5B5"} />
        </div>
        <img
          alt="background"
          src={bgPicture}
          className="h-full w-full rounded-t-lg"
        />
        <div className="relative bottom-0 flex h-1/6 w-full items-center justify-center bg-MatLightTeal">
          <h5 className="max-h-[25px] w-full w-5/6 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold text-MatBlue">
            Carrageenan Film Ca03 with biomolecular stuff
          </h5>
        </div>
      </div>
    </div>
  );
}

export default DataSearchResultItem;
