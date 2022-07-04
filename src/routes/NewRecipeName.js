import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import composition from "../pictures/recipe/composition.svg";
import properties from "../pictures/recipe/properties.svg";
import method from "../pictures/recipe/method.svg";
import gallery from "../pictures/recipe/gallery.svg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import useUpdateTitle from "../hooks/UpdatePageTitle";

import { useNavigate } from "react-router-dom";

function NewRecipeName(props) {
  // update page title
  useUpdateTitle(props.title);

  // function useGoToNewRecipe() {
  //   let navigate = useNavigate();

  //   navigate("/new-recipe", { replace: true });
  // }

  const [terms, updateTerms] = useState(false);
  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey max-h-screen overflow-x-scroll custom-scrollbar">
      <Header activePage="connect" />

      <div className="h-[85vh] flex justify-between flex-wrap w-full px-36 py-10 bg-MatLightGrey custom-scrollbar">
        {/* Recipe warning START */}
        <div className="flex flex-col w-full h-1/5">
          <div className="flex flex-col items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
            <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
              New recipe
            </h3>
            <div className="flex w-full justify-between items-center my-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        {/* Recipe warning END*/}

        {/* edit title START */}

        <div className="flex flex-col w-full mt-5 h-1/5">
          <div className="flex flex-col items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
            <div className="flex w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Recipe title
              </h3>
              <h3 className="text-xl font-codecCold text-MatDarkGrey">
                Required
              </h3>
            </div>
            <input className="my-5 text-lg italic" />
          </div>
        </div>
        {/* edit title END*/}

        {/* recipe code START */}

        <div className="flex flex-col w-full mt-5 h-1/5">
          <div className="flex flex-col items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
            <div className="flex w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Recipe code
              </h3>
            </div>
            <h4 className="my-5 text-lg italic" >AGeCh5</h4>
          </div>
        </div>
        {/* recipe code END*/}

        {/* choose recipe method START*/}
        <div className="flex w-full pt-5 h-1/5">
          <div className="flex flex-col items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
            <div className="flex w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Create new recipe from:
              </h3>
            </div>
            <div className="flex w-full justify-between items-center my-5">
              <button className="blue-button mx-3">Submission form</button>
              <button className="blue-button mx-3">Fork existing recipe</button>
              <button className="blue-button mx-3">CSV upload</button>
            </div>
          </div>
          {/* choose recipe method END*/}
        </div>
      </div>
    </div>
  );
}

export default NewRecipeName;
