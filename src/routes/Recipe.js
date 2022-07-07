// Dependencies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

// Pictures
import time from "../pictures/recipe/time.svg";
import composition from "../pictures/recipe/composition.svg";
import properties from "../pictures/recipe/properties.svg";
import method from "../pictures/recipe/method.svg";
import gallery from "../pictures/recipe/gallery.svg";

// Components
import ToolsList from "../components/recipe/ToolsList";
import ProcessList from "../components/recipe/ProcessList";
import IngredientsList from "../components/recipe/IngredientsList";
import MethodList from "../components/recipe/MethodList";
import Gallery from "../components/recipe/Gallery";
import DifficultyIcon from "../components/recipe/DifficultyIcon";

// Hooks
import { ConvertHtmlToString } from "../hooks/ConvertHtmlToString";
import useUpdateTitle from "../hooks/UpdatePageTitle";

export default function Recipe(props) {
  // update page title
  useUpdateTitle(props.title);

  // get parameters from the router url
  const params = useParams();

  // set initial state
  const [recipe, updateRecipe] = useState({});

  // dummy fetch recipe data
  const getRecipe = () => {
    fetch(`https://materiom.org/api/recipe/${params.recipeId}`)
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data);
        updateRecipe(data);
      });
  };

  // update state upon initial render
  useEffect(() => {
    getRecipe();
    // if you return a function from useEffect is will fire
    // when the component is removed from the DOM to help
    // keep state clean
    return () => updateRecipe({});
  }, []);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey max-h-screen overflow-x-scroll custom-scrollbar">
      <Header activePage="connect" />

      <div className="h-full flex justify-between flex-wrap w-full px-36 py-10 bg-MatLightGrey custom-scrollbar">
        {/* Recipe details START */}
        <div className="flex flex-col w-full h-1/2">
          <div className="w-full h-full justify-around rounded-lg bg-white pl-5 pt-5 pb-5">
            <div className="flex justify-between pr-5 pb-5">
              <div className="flex flex-col items-start">
                <h5 className="text-sm text-MatDarkGrey">
                  Ref:{" "}
                  {recipe.ref_code
                    ? ConvertHtmlToString(recipe.ref_code)
                    : "N/A"}{" "}
                  |{" "}
                  {recipe.created_at
                    ? // the line below splits the date at the ' ' and returns
                      // the first part to remove the time and return the date only
                      recipe.created_at.split(" ")[0]
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
              <div className="flex w-full">
                <div
                  className={
                    "flex w-1/2 min-w-[50%] " +
                    (!recipe.thumbnail_src && "bg-MatDarkGrey")
                  }
                >
                  {recipe.thumbnail_src && (
                    <img
                      className="w-full object-center object-cover min-w-full"
                      src={`https://materiom.org/storage/${recipe.thumbnail_src}`}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-around w-1/2 bg-MatLightGrey p-5">
                  <div className="flex">
                    <div className="flex flex-col">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Created by:
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {recipe.author
                          ? ConvertHtmlToString(recipe.author)
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
                        {recipe.contributors ? recipe.contributors : "N/A"}
                      </h6>
                    </div>
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Source
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {recipe.source
                          ? ConvertHtmlToString(recipe.source)
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
                        {recipe.license
                          ? ConvertHtmlToString(recipe.license)
                          : "N/A"}
                      </h6>
                    </div>
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Difficulty
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs">
                        {recipe.difficulty ? (
                          <DifficultyIcon difficulty={recipe.difficulty} />
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
                    {recipe.description ? recipe.description : "N/A"}
                  </h6>
                </div>

                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Preparation time
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs flex items-center">
                    <img src={time} alt="time icon" className="mr-1" />
                    {recipe.prep_time ? recipe.prep_time : "N/A"}
                  </h6>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Tools
                  </h5>
                  {recipe.tools ? <ToolsList tools={recipe.tools} /> : "N/A"}
                </div>

                <div className="flex flex-col">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Process
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs">
                    {recipe.tools ? (
                      <ProcessList processes={recipe.processes} />
                    ) : (
                      "N/A"
                    )}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recipe details END*/}

        {/* Recipe ingredients START */}
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
                {recipe.ingredients ? (
                  <IngredientsList ingredients={recipe.ingredients} />
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
        {/* Recipe ingredients END*/}

        {/* Recipe's method START*/}
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
                  {recipe.ingredients ? (
                    <MethodList method={recipe.steps} />
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recipe's method END*/}

        {/* Recipe's gallery START*/}
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

                  {recipe.ingredients ? (
                    <Gallery gallery={recipe.gallery} />
                  ) : (
                    "N/A"
                  )}

                  <BsChevronCompactRight className="my-auto text-4xl text-MatLightGrey" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recipe's gallery END*/}
      </div>
    </div>
  );
}
