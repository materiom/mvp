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

function NewRecipeTerms(props) {
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

      <div className="h-full flex justify-between flex-wrap w-full px-36 py-10 bg-MatLightGrey custom-scrollbar">
        {/* Recipe warning START */}
        <div className="flex flex-col w-full h-1/2">
          <div className="flex flex-col items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
            <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
              Before you start:
            </h3>
            <div className="flex w-full justify-between items-center my-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className="blue-button"
                disabled={!terms}
                onClick={''}
              >
                Make new recipe
              </button>
            </div>
          </div>
        </div>
        {/* Recipe warning END*/}

        {/* T&C START */}

        <div className="flex flex-col w-full h-1/2 mt-5">
          <div className="flex flex-col items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
            <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
              Terms {"&"} Conditions:
            </h3>
            <p className="max-h-[30vh] overflow-y-scroll mt-5 custom-scrollbar">
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              inisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              inisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              inisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>

            <div className="flex w-full justify-between items-center my-5">
              <Link className=" w-1/2 no-underline" to="/">
                <button className="grey-button no-underline">Cancel</button>
              </Link>
              <button
                className="blue-button"
                onClick={() => updateTerms(!terms)}
              >
                Agree
              </button>
            </div>
          </div>
        </div>
        {/* T&C END*/}

        {/* recipe's method START*/}
        <div className="flex w-full h-1/2">
          <div className="w-1/2 h-full justify-around rounded-lg mt-5 pb-5 pr-5">
            <div className="flex items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
              <div className="flex flex-col mb-5">
                <div className="flex items-center mb-5">
                  <img src={method} alt="recipes icon" />
                  <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                    Search duplicates
                  </h4>
                </div>
                <div className="flex w-full">
                  <p className="w-1/2">
                    Ur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi.
                  </p>
                  <Link className=" w-1/2 no-underline m-auto " to="/analyse">
                    <button className="blue-button no-underline">Search</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* recipe's method END*/}
          {/* recipe's method START*/}
          <div className="w-1/2 h-full justify-around rounded-lg  mt-5 pb-5">
            <div className="flex items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
              <div className="flex flex-col mb-5">
                <div className="flex items-center mb-5">
                  <img src={method} alt="recipes icon" />
                  <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                    Read guidance
                  </h4>
                </div>
                <div className="flex w-full">
                  <p className="w-1/2">
                    Ur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi.
                  </p>
                  <Link className=" w-1/2 no-underline m-auto " to="/guide">
                    <button className="blue-button no-underline">
                      Guidance
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* recipe's method END*/}
      </div>
    </div>
  );
}

export default NewRecipeTerms;
