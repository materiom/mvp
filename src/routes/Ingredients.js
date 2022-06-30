import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

import logo from "../pictures/logo.png";
import time from "../pictures/ingredient/time.svg";
import composition from "../pictures/ingredient/composition.svg";
import properties from "../pictures/ingredient/properties.svg";
import method from "../pictures/ingredient/method.svg";
import gallery from "../pictures/ingredient/gallery.svg";

import { ConvertHtmlToString } from "../hooks/ConvertHtmlToString";

import ToolsList from "../components/ingredient/ToolsList";
import ProcessList from "../components/ingredient/ProcessList";
import IngredientsList from "../components/ingredient/IngredientsList";
import MethodList from "../components/ingredient/MethodList";
import Gallery from "../components/ingredient/Gallery";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import DifficultyIcon from "../components/ingredient/DifficultyIcon";

function Ingredient() {
  // get parameters from the router url
  const params = useParams();

  const [ingredient, updateRecipe] = useState({});

  // dummy fetch ingredient data
  const getRecipe = () => {
    // const ingredient = recipeData.filter((ingredient) => ingredient.id === params.recipeId);
    // updateRecipe(ingredient[0]);
    // console.log(ingredient[0]);
    fetch(`https://materiom.org/api/ingredient/${params.ingredientId}`)
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        updateRecipe(data);
      });
    // .then(data => updateRecipe(data))
    // .finally(console.log(ingredient))
  };

  // update state upon first render
  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey max-h-screen overflow-x-scroll custom-scrollbar">
      <Header activePage="connect" />

      <div className="h-full flex justify-between flex-wrap w-full px-36 py-10 bg-MatLightGrey custom-scrollbar">
        {/* users's recipes and contributions */}
        <div className="flex flex-col w-full h-1/2">
          <div className="w-full h-full justify-around rounded-lg bg-white pl-5 pt-5 pb-5">
            <div className="flex justify-between pr-5 pb-5">
              <div className="flex flex-col items-start">
                <h5 className="text-sm text-MatDarkGrey">
                  Ref:{" "}
                  {ingredient.ref_code
                    ? ConvertHtmlToString(ingredient.ref_code)
                    : "N/A"}{" "}
                  |{" "}
                  {ingredient.created_at
                    ? // the line below splits the date at the ' ' and returns
                      // the first part to remove the time and return the date only
                      ingredient.created_at.split(" ")[0]
                    : "N/A"}{" "}
                  | V1
                </h5>
                <h4 className="capitalize font-codecColdExtraBold text-MatTeal">
                  {ingredient.name}
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
                <div className="flex w-1/2 min-w-[50%]">
                  <img
                    className="w-full object-center object-cover min-w-full"
                    src={
                      !ingredient.thumbnail_src
                        ? logo
                        : `https://materiom.org/storage/${ingredient.thumbnail_src}`
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
                        {ingredient.author
                          ? ConvertHtmlToString(ingredient.author)
                          : "N/A"}
                      </h6>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Contributors
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {ingredient.contributors ? ingredient.contributors : "N/A"}
                      </h6>
                    </div>
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Source
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {ingredient.source
                          ? ConvertHtmlToString(ingredient.source)
                          : "N/A"}
                      </h6>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        License
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {ingredient.license
                          ? ConvertHtmlToString(ingredient.license)
                          : "N/A"}
                      </h6>
                    </div>
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Difficulty
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {ingredient.difficulty ? (
                          <DifficultyIcon difficulty={ingredient.difficulty} />
                        ) : (
                          "N/A"
                        )}
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
                    {ingredient.description ? ingredient.description : "N/A"}
                  </h6>
                </div>

                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Preparation time
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs flex items-center">
                    <img src={time} alt="time icon" className="mr-1" />
                    {ingredient.prep_time ? ingredient.prep_time : "N/A"}
                  </h6>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Tools
                  </h5>
                  {ingredient.tools ? <ToolsList tools={ingredient.tools} /> : "N/A"}
                </div>

                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Process
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs">
                    {ingredient.tools ? (
                      <ProcessList processes={ingredient.processes} />
                    ) : (
                      "N/A"
                    )}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* user's recipes and contributions END*/}

        {/* ingredient ingredients START */}
        <div className="flex w-full h-1/2 pt-5">
          <div className="w-full flex justify-start items-start rounded-lg bg-MatLightGrey">
            <div className="flex flex-col items-start w-1/2 pt-5 px-5 h-full bg-white rounded-lg">
              <div className="flex items-center mb-5">
                <img src={composition} alt="recipes icon" />
                <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                  Composition
                </h4>
              </div>
              <div className="flex w-full">
                {ingredient.ingredients ? (
                  <IngredientsList ingredients={ingredient.ingredients} />
                ) : (
                  "N/A"
                )}
              </div>
            </div>
            <div className="flex flex-col items-start w-1/2 pt-5 ml-5 px-5 h-full bg-white rounded-lg">
              <div className="flex mb-5">
                <div className="flex items-center mb-5">
                  <img src={properties} alt="interest icon" />

                  <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                    Material properties
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ingredient ingredients END*/}

        {/* ingredient's method START*/}
        <div className="flex flex-col w-full h-1/2">
          <div className="w-full h-full justify-around rounded-lg bg-white mt-5 pb-5">
            <div className="flex items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
              <div className="flex flex-col mb-5">
                <div className="flex items-center mb-5">
                  <img src={method} alt="recipes icon" />
                  <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                    Method
                  </h4>
                </div>
                <div className="flex flex-col w-full">
                  <h5 className="mb-3 text-MatGrey">Steps</h5>
                  {ingredient.ingredients ? (
                    <MethodList method={ingredient.steps} />
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ingredient's method END*/}
        {/* ingredient's method START*/}
        <div className="flex flex-col w-full h-1/2">
          <div className="w-full h-full justify-around rounded-lg bg-white mt-5 pb-5">
            <div className="flex items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
              <div className="flex flex-col mb-5">
                <div className="flex items-center mb-5">
                  <img src={gallery} alt="recipes icon" />
                  <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                    Gallery images
                  </h4>
                </div>
                <div className="flex w-full">
                  <BsChevronCompactLeft className="my-auto text-4xl text-MatLightGrey" />

                  {ingredient.ingredients ? (
                    <Gallery gallery={ingredient.gallery} />
                  ) : (
                    "N/A"
                  )}

                  <BsChevronCompactRight className="my-auto text-4xl text-MatLightGrey" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ingredient's method END*/}
      </div>
    </div>
  );
}

export default Ingredient;
