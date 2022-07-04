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
import ContributeYourItemCard from "../components/contribute/ContributeYourItemCard";

function NewRecipeName(props) {
  // update page title
  useUpdateTitle(props.title);

  // function useGoToNewRecipe() {
  //   let navigate = useNavigate();

  //   navigate("/new-recipe", { replace: true });
  // }

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey max-h-screen overflow-x-scroll custom-scrollbar">
      <Header activePage="connect" />

      <div className="h-[85vh] flex justify-between flex-wrap w-full px-36 py-10 bg-MatLightGrey custom-scrollbar">
        {/* Recipe warning START */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
            <h3 className="text-xl mb-5 font-codecColdExtraBold text-MatDarkGrey">
              Search Materiom Database
            </h3>
            <div className="flex w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Search by recipe title
              </h3>
            </div>
            <input className="my-5 text-lg italic rounded-lg" type="text" />
            <div className="flex w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Search by recipe code
              </h3>
            </div>
            <input className="my-5 text-lg italic rounded-lg" type="text" />

            <div className="flex flex-col w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Search results
              </h3>
              <div className="flex w-full overflow-y-scroll flex-wrap max-h-[40vh]">
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewRecipeName;
