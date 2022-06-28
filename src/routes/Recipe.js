import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

import logo from "../pictures/logo.png";

import recipes from "../pictures/directory/recipes.svg";
import composition from "../pictures/recipe/composition.svg";
import properties from "../pictures/recipe/properties.svg";
import method from "../pictures/recipe/method.svg";
import gallery from "../pictures/recipe/gallery.svg";

import { recipeData } from "../testRecipes";

import { ConvertHtmlToString } from "../hooks/ConvertHtmlToString";

function Recipe() {
  // get parameters from the router url
  const params = useParams();

  const [recipe, updateRecipe] = useState({});

  // dummy fetch recipe data
  const getRecipe = () => {
    const recipe = recipeData.filter((recipe) => recipe.id === params.recipeId);

    updateRecipe(recipe[0]);
    console.log(recipe);
  };

  useEffect(() => getRecipe(), []);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey max-h-screen custom-scrollbar">
      <Header activePage="connect" />

      <div className="h-full flex justify-between flex-wrap w-full px-36 pt-5 bg-MatLightGrey custom-scrollbar">
        {/* users's recipes and contributions */}
        <div className="flex flex-col w-full h-1/2">
          <div className="w-full h-full justify-around rounded-lg bg-white pl-5 pt-5 pb-5">
            <div className="flex justify-between pr-5 pb-5">
              <div className="flex flex-col items-start">
                <h5 className="text-sm text-MatDarkGrey">
                  Ref:{" "}
                  {recipe.ref_code
                    ? ConvertHtmlToString(recipe.ref_code)
                    : "N/A"}{" "}
                  | V1
                </h5>
                <h4 className="capitalize font-codecColdExtraBold text-MatTeal">
                  {recipe.name}
                </h4>
              </div>

              <div className="flex rounded-lg items-center bg-MatLightGrey text-MatDarkGrey px-5 w-">
                <div className="flex w-1/5">
                  <h5 className="text-xl">+</h5>
                </div>
                <div className="border-l-2 border-white h-full flex items-center justify-center text-sm w-40">
                  <h4>Add to favorites</h4>
                </div>
              </div>
            </div>
            <div className="flex w-full h-72">
              <div className="flex">
                <div className="flex w-1/2">
                  <img
                    className="w-full object-top object-cover"
                    src={
                      !recipe.thumbnail_src
                        ? logo
                        : `https://materiom.org/storage/${recipe.thumbnail_src}`
                    }
                  />
                </div>
                <div className="flex flex-col justify-around w-1/2 bg-MatLightGrey p-5">
                  <div className="flex">
                    <div className="flex flex-col">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Created by:
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {recipe.author ? recipe.author : "N/A"}
                      </h6>
                    </div>
                  </div>
                  <div className="flex w-1/2 justify-between">
                    <div className="flex flex-col">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Contributors
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {recipe.contributors ? recipe.contributors : "N/A"}
                      </h6>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Source
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {recipe.contributors ? recipe.contributors : "N/A"}
                      </h6>
                    </div>
                  </div>
                  <div className="flex w-1/2 justify-between">
                    <div className="flex flex-col">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        License
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {recipe.contributors ? recipe.contributors : "N/A"}
                      </h6>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Difficulty
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {recipe.contributors ? recipe.contributors : "N/A"}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-5">
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Description
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs">
                    {recipe.contributors ? recipe.contributors : "N/A"}
                  </h6>
                </div>

                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Preparation time
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs">
                    {recipe.contributors ? recipe.contributors : "N/A"}
                  </h6>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Tools
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs">
                    {recipe.contributors ? recipe.contributors : "N/A"}
                  </h6>
                </div>

                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Process
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs">
                    {recipe.contributors ? recipe.contributors : "N/A"}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* user's recipes and contributions END*/}

        {/* user's industry and interests */}
        <div className="flex w-full h-1/2 pt-5">
          <div className="w-full flex justify-start items-start rounded-lg bg-MatLightGrey">
            <div className="flex items-start w-1/2 pt-5 px-5 h-full bg-white rounded-lg">
              <div className="flex mb-5">
                <img src={composition} alt="recipes icon" />
                <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                  Composition
                </h4>
              </div>
            </div>
            <div className="flex flex-col items-start w-1/2 pt-5 ml-5 px-5 h-full bg-white rounded-lg">
              <div className="flex mb-5">
                <img src={properties} alt="interest icon" />
                <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                  Material properties
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* user's industry and interests END*/}

        {/* recipe's method START*/}
        <div className="flex flex-col w-full h-1/2">
          <div className="w-full h-full justify-around rounded-lg bg-white mt-5 pb-5">
            <div className="flex items-start w-1/2 pt-5 px-5 h-full bg-white rounded-lg">
              <div className="flex mb-5">
                <img src={method} alt="recipes icon" />
                <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                  Method
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* recipe's method END*/}
        {/* recipe's method START*/}
        <div className="flex flex-col w-full h-1/2">
          <div className="w-full h-full justify-around rounded-lg bg-white mt-5 pb-5">
            <div className="flex items-start w-1/2 pt-5 px-5 h-full bg-white rounded-lg">
              <div className="flex mb-5">
                <img src={gallery} alt="recipes icon" />
                <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                  Gallery images
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* recipe's method END*/}
      </div>
    </div>
  );
}

export default Recipe;
