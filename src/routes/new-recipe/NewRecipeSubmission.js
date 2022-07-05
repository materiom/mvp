import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import time from "../../pictures/recipe/time.svg";
import composition from "../../pictures/recipe/composition.svg";
import properties from "../../pictures/recipe/properties.svg";
import method from "../../pictures/recipe/method.svg";
import gallery from "../../pictures/recipe/gallery.svg";

import { ConvertHtmlToString } from "../../hooks/ConvertHtmlToString";
import ToolsList from "../../components/recipe/ToolsList";
import ProcessList from "../../components/recipe/ProcessList";
import IngredientsList from "../../components/recipe/IngredientsList";
import MethodList from "../../components/recipe/MethodList";
import Gallery from "../../components/recipe/Gallery";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsFileMinus,
  BsNodeMinus,
  BsPatchMinus,
  BsPencil,
  BsPlus,
  BsShieldFillMinus,
  BsSubtract,
} from "react-icons/bs";
import DifficultyIcon from "../../components/recipe/DifficultyIcon";
import useUpdateTitle from "../../hooks/UpdatePageTitle";
import ContributePhotoCrop from "../../components/contribute/ContributePhotoCrop";
import MultiSelect from "../../components/MultiSelect";
import CustomMultiSelect from "../../components/MultiSelect";

function NewRecipeSubmission(props) {
  // update page title
  useUpdateTitle(props.title);

  // get parameters from the router url
  const params = useParams();

  const [recipe, updateRecipe] = useState({});
  const [unsaved, updateUnsaved] = useState(false);
  const [formComplete, updateFormComplete] = useState(false);

  const dummyDate = (new Date()).toDateString() 
  
  const updateRecipeObject = (event) => {
    updateRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const updateDifficulty = () => {
    const newDifficulty = recipe.difficulty < 5 ? recipe.difficulty + 1 : 1;
    updateRecipe({ ...recipe, difficulty: newDifficulty });
  };

  // dummy fetch recipe data
  const getRecipe = () => {
    fetch(`https://materiom.org/api/recipe/${params.recipeId}`)
      .then(function (response) {
        // The response is a Response instance.
        // Parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        updateRecipe(data);
      });
  };

  // update state upon first render
  useEffect(() => {
    getRecipe();
  }, []);

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey max-h-screen overflow-x-scroll custom-scrollbar">
      <Header activePage="connect" />

      <div className="h-full flex justify-between flex-wrap w-full px-36 py-10 bg-MatLightGrey custom-scrollbar">
        {/* recipes details START */}
        <div className="flex flex-col w-full h-1/2">
          <div className="w-full h-full justify-around rounded-lg bg-white pl-5 pt-5 pb-5">
            <div className="flex justify-between pr-5 pb-5">
              <div className="flex flex-col items-start">
                <h5 className="text-sm text-MatDarkGrey">
                  Ref:{" "}
                  {recipe.ref_code
                    ? ConvertHtmlToString(recipe.ref_code)
                    : "AGeCh5"}{" "}
                  |{" "}
                  {recipe.created_at
                    ? // the line below splits the date at the ' ' and returns
                      // the first part to remove the time and return the date only
                      recipe.created_at.split(" ")[0]
                    : dummyDate}{" "}
                  | V1
                </h5>
                <h4 className="capitalize font-codecColdExtraBold text-MatTeal">
                  {recipe.name}
                </h4>
              </div>
              <div className="flex w-1/4">
                <button
                  disabled={!unsaved}
                  className="blue-squircle-button mx-3"
                >
                  {" "}
                  Save Progress
                </button>
                <button
                  disabled={!formComplete}
                  className="blue-squircle-button"
                >
                  {" "}
                  Submit
                </button>
              </div>
            </div>
            <div className="flex w-full min-w-full h-72">
              <div className="flex w-full">
                {/*
                 {true ? (
                  <div className=" z-10 absolute top-0 left-0 bg-MatLightGrey h-screen w-screen ">
                     <ContributePhotoCrop  className="m-auto"/> 
                  </div>
                ) : (
                  ""
                )} 
                */}
                <div className="flex w-1/2 min-w-[50%]">
                  <div className="w-full overflow-hidden relative">
                    <div className="flex bg-MatLightGrey2 p-3 absolute right-0 rounded-bl-lg filter hover:brightness-90">
                      <BsPencil />
                    </div>
                    <img
                      className="w-full object-center object-cover min-w-full"
                      src={composition}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-around w-1/2 bg-MatLightGrey p-5 relative">
                  <div className="flex bg-MatLightGrey2 p-3 absolute right-0 top-0 rounded-bl-lg filter hover:brightness-90">
                    <BsPencil />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Created by:
                      </h5>
                      <input
                        name="author"
                        onChange={(event) => updateRecipeObject(event)}
                        value={recipe.author && recipe.author}
                        className="text-MatDarkGrey text-xs bg-MatLightGrey"
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Contributors
                      </h5>
                      <input
                        name="contributors"
                        onChange={(event) => updateRecipeObject(event)}
                        value={recipe.contributors && recipe.contributors}
                        className="text-MatDarkGrey text-xs bg-MatLightGrey"
                      />
                    </div>
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Source
                      </h5>
                      <input
                        name="source"
                        onChange={(event) => updateRecipeObject(event)}
                        value={recipe.source && recipe.source}
                        className="text-MatDarkGrey text-xs bg-MatLightGrey"
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        License
                      </h5>
                      <input
                        name="license"
                        onChange={(event) => updateRecipeObject(event)}
                        value={recipe.license && recipe.license}
                        className="text-MatDarkGrey text-xs bg-MatLightGrey"
                      />
                    </div>
                    <div className="flex flex-col w-1/2">
                      <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                        Difficulty
                      </h5>
                      <h6 className="text-MatDarkGrey text-xs flex items-center justify-start w-min">
                        {false ? (
                          <DifficultyIcon difficulty={recipe.difficulty} />
                        ) : (
                          <DifficultyIcon difficulty={recipe.difficulty} />
                        )}
                        <BsPlus
                          onClick={() => updateDifficulty()}
                          className="text-2xl rounded-full hover:scale-125 hover:bg-MatLightGrey2 transition duration-300"
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex flex-col w-full">
                <div className="flex flex-col mt-5 min-h-[75px]">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Description
                  </h5>
                  <input
                    name="description"
                    onChange={(event) => updateRecipeObject(event)}
                    value={recipe.description && recipe.description}
                    className="text-MatDarkGrey text-xs"
                  />
                </div>

                <div className="flex flex-col  min-h-[75px]">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Preparation time
                  </h5>
                  <h6 className="text-MatDarkGrey text-xs flex items-center">
                    <img src={time} alt="time icon" className="mr-1" />
                    <input
                      name="time"
                      onChange={(event) => updateRecipeObject(event)}
                      value={recipe.time && recipe.time}
                      className="text-MatDarkGrey text-xs "
                    />
                  </h6>
                </div>
              </div>
              <div className="flex flex-col w-full mt-5">
                <div className="flex flex-col  min-h-[75px]">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Tools
                  </h5>
                  <CustomMultiSelect />
                  {/* <input
                    name="tools"
                    onChange={(event) => updateRecipeObject(event)}
                    value={recipe.tools && recipe.tools}
                    className="text-MatDarkGrey text-xs "
                  /> */}
                </div>

                <div className="flex flex-col min-h-[75px]">
                  <h5 className="text-MatDarkGrey font-codecColdBold text-base">
                    Process
                  </h5>
                  <CustomMultiSelect />
                </div>
              </div>
              <div className="flex bg-MatLightGrey2 p-3 absolute right-0 rounded-bl-lg filter hover:brightness-90">
                <BsPencil />
              </div>
            </div>
          </div>
        </div>
        {/* recipes details END */}

        {/* recipe ingredients START */}
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
        {/* recipe ingredients END*/}

        {/* recipe's method START*/}
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
        {/* recipe's method END*/}
        {/* recipe's method START*/}
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
        {/* recipe's method END*/}
      </div>
    </div>
  );
}

export default NewRecipeSubmission;
