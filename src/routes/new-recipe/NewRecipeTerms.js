// Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../../components/Header";

// Pictures
import method from "../../pictures/recipe/method.svg";

// Hooks
import useUpdateTitle from "../../hooks/UpdatePageTitle";

export default function NewRecipeTerms(props) {
  // update page title
  useUpdateTitle(props.title);

  // set initial state
  const [terms, updateTerms] = useState(false);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey max-h-screen overflow-x-scroll custom-scrollbar">
      {/* Pass through a string to tell the header which tab to highlight */}
      <Header activePage="contribute" />

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
              {terms ? (
                <Link to="/new-recipe/name" className="flex w-4/5">
                  <button
                    className="blue-button w-full ml-auto "
                    disabled={!terms}
                    onClick={""}
                  >
                    Make new recipe
                  </button>
                </Link>
              ) : (
                <button
                  className="blue-button ml-20"
                  disabled={!terms}
                  onClick={""}
                >
                  Make new recipe
                </button>
              )}
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
              eiusmod tempor inc quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor inisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incidex ea commodo consequat. Duis aute irure dolor in
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

        {/* User advice START*/}
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
        {/* User advice END*/}
      </div>
    </div>
  );
}
