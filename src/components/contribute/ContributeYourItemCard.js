import React from "react";
import {
  BsEye,
  BsEyeFill,
  BsPencil,
} from "react-icons/bs";

import recipeImage from "../../pictures/registration.jpg";

function ContributeYourItemCard() {
  return (
    <div className="flex-col rounded-lg flex-[1_0_18%] min-w-[150px] max-w-xs aspect-square p-3 justify-end">
      <div className="h-6 w-6 ml-auto rounded-full p-1 bg-MatLightGrey relative top-8 right-2 hover:bg-MatTeal hover:text-white transition duration-300">
        <BsPencil className="h-full"/>
      </div>
      <div className="h-1/2 overflow-hidden">
        <img className=" rounded-t-lg" src={recipeImage} alt="" />
      </div>
      <div className="flex flex-col pt-1 px-3 bg-MatNeutral rounded-b-lg">
        <h6 className="text-[10px] text-MatGrey">
          {new Date().toISOString().slice(0, 10)}
        </h6>
        <h4 className="text-md text-MatTeal font-codecColdBold overflow-hidden text-ellipsis whitespace-nowrap">
          Carrageenan Film Ca03 Film Ca03
        </h4>
        <h5 className="text-xs text-MatDarkGrey">
          Contribution: {"Base recipe"}
        </h5>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BsEye className="text-MatDarkGrey" />
            <h6 className="text-[10px] text-MatGrey ml-1 my-3">Published</h6>
          </div>
          <div className="flex items-center text-MatGrey">
            <BsEyeFill className=" mr-1" />
            <h6>462</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributeYourItemCard;
