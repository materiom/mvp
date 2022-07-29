// Dependencies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsPencil,
  BsPlus,
} from "react-icons/bs";

// Pictures
import time from "../../pictures/recipe/time.svg";
import composition from "../../pictures/recipe/composition.svg";
import properties from "../../pictures/recipe/properties.svg";
import method from "../../pictures/recipe/method.svg";
import gallery from "../../pictures/recipe/gallery.svg";

// Components
import IngredientsList from "../../components/recipe/IngredientsList";
import MethodList from "../../components/recipe/MethodList";
import Gallery from "../../components/recipe/Gallery";
import CustomMultiSelect from "../../components/MultiSelect";
import DifficultyIcon from "../../components/recipe/DifficultyIcon";
import Header from "../../components/Header";

// Hooks
import { ConvertHtmlToString } from "../../hooks/ConvertHtmlToString";
import useUpdateTitle from "../../hooks/UpdatePageTitle";

export default function NewRecipeSubmission(props) {
  // update page title
  useUpdateTitle(props.title);

  // get parameters from the router url
  const params = useParams();

  // set initial state
  const [recipe, updateRecipe] = useState({});
  const [unsaved, updateUnsaved] = useState(false);
  const [formComplete, updateFormComplete] = useState(false);
  const dummyDate = new Date().toDateString();

  // function to update recipe oject without overwriting
  // the info already there
  const updateRecipeObject = (event) => {
    updateRecipe({ ...recipe, [event.target.name]: event.target.value });
    updateUnsaved(true);
  };

  // function to update difficulty
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
    // disable unneeded warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" custom-scrollbar flex max-h-screen min-h-screen w-full flex-col overflow-x-scroll bg-MatLightGrey">
      <Header activePage="contribute" />

      <div className="custom-scrollbar flex h-full w-full flex-wrap justify-between bg-MatLightGrey px-36 py-10">
        {/* recipes details START */}
        <div className="flex h-1/2 w-full flex-col">
          <div className="h-full w-full justify-around rounded-lg bg-white pl-5 pt-5 pb-5">
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
                <h4 className="font-codecColdExtraBold capitalize text-MatTeal">
                  {recipe.name}
                </h4>
              </div>
              <div className="flex w-1/4">
                {/* dummy save function below */}
                <button
                  disabled={!unsaved}
                  className="blue-squircle-button mx-3"
                  onClick={() => updateUnsaved(false)}
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
            <div className="flex h-72 w-full min-w-full">
              <div className="flex w-full">
                <div className="flex w-1/2 min-w-[50%]">
                  <div className="relative w-full overflow-hidden">
                    <div className="absolute right-0 flex rounded-bl-lg bg-MatLightGrey2 p-3 filter hover:brightness-90">
                      <BsPencil />
                    </div>
                    <img
                      alt="composition icon"
                      className="w-full min-w-full object-cover object-center"
                      src={composition}
                    />
                  </div>
                </div>
                <div className="relative flex w-1/2 flex-col justify-around bg-MatLightGrey p-5">
                  <div className="absolute right-0 top-0 flex rounded-bl-lg bg-MatLightGrey2 p-3 filter hover:brightness-90">
                    <BsPencil />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                        Created by:
                      </h5>
                      <input
                        name="author"
                        onChange={(event) => updateRecipeObject(event)}
                        value={recipe.author && recipe.author}
                        className="bg-MatLightGrey text-xs text-MatDarkGrey"
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex w-1/2 flex-col">
                      <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                        Contributors
                      </h5>
                      <input
                        name="contributors"
                        onChange={(event) => updateRecipeObject(event)}
                        value={recipe.contributors && recipe.contributors}
                        className="bg-MatLightGrey text-xs text-MatDarkGrey"
                      />
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                        Source
                      </h5>
                      <input
                        name="source"
                        onChange={(event) => updateRecipeObject(event)}
                        value={recipe.source && recipe.source}
                        className="bg-MatLightGrey text-xs text-MatDarkGrey"
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex w-1/2 flex-col">
                      <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                        License
                      </h5>
                      <input
                        name="license"
                        onChange={(event) => updateRecipeObject(event)}
                        value={recipe.license && recipe.license}
                        className="bg-MatLightGrey text-xs text-MatDarkGrey"
                      />
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                        Difficulty
                      </h5>
                      <h6 className="flex w-min items-center justify-start text-xs text-MatDarkGrey">
                        {false ? (
                          <DifficultyIcon difficulty={recipe.difficulty} />
                        ) : (
                          <DifficultyIcon difficulty={recipe.difficulty} />
                        )}
                        <BsPlus
                          onClick={() => updateDifficulty()}
                          className="rounded-full text-2xl transition duration-300 hover:scale-125 hover:bg-MatLightGrey2"
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex">
              <div className="flex w-full flex-col">
                <div className="mt-5 flex min-h-[75px] flex-col">
                  <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                    Description
                  </h5>
                  <input
                    name="description"
                    onChange={(event) => updateRecipeObject(event)}
                    value={recipe.description && recipe.description}
                    className="text-xs text-MatDarkGrey"
                  />
                </div>

                <div className="flex min-h-[75px]  flex-col">
                  <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                    Preparation time
                  </h5>
                  <h6 className="flex items-center text-xs text-MatDarkGrey">
                    <img src={time} alt="time icon" className="mr-1" />
                    <input
                      name="time"
                      onChange={(event) => updateRecipeObject(event)}
                      value={recipe.time && recipe.time}
                      className="text-xs text-MatDarkGrey "
                    />
                  </h6>
                </div>
              </div>
              <div className="mt-5 flex w-full flex-col">
                <div className="flex min-h-[75px]  flex-col">
                  <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                    Tools
                  </h5>
                  <CustomMultiSelect />
                </div>

                <div className="flex min-h-[75px] flex-col">
                  <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                    Process
                  </h5>
                  <CustomMultiSelect />
                </div>
              </div>
              <div className="absolute right-0 flex rounded-bl-lg bg-MatLightGrey2 p-3 filter hover:brightness-90">
                <BsPencil />
              </div>
            </div>
          </div>
        </div>
        {/* recipes details END */}

        {/* recipe ingredients START */}
        <div className="flex h-1/2 w-full pt-5">
          <div className="flex w-full items-start justify-start rounded-lg bg-MatLightGrey">
            <div className="flex h-full w-1/2 flex-col items-start rounded-lg bg-white px-5 pt-5">
              <div className="mb-5 flex items-center">
                <img src={composition} alt="recipes icon" />
                <h4 className=" ml-3 font-codecColdExtraBold text-MatTeal">
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
            <div className="ml-5 flex h-full w-1/2 flex-col items-start rounded-lg bg-white px-5 pt-5">
              <div className="mb-5 flex">
                <div className="mb-5 flex items-center">
                  <img src={properties} alt="interest icon" />

                  <h4 className=" ml-3 font-codecColdExtraBold text-MatTeal">
                    Material properties
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* recipe ingredients END*/}

        {/* recipe's method START*/}
        <div className="flex h-1/2 w-full flex-col">
          <div className="mt-5 h-full w-full justify-around rounded-lg bg-white pb-5">
            <div className="flex h-full w-full items-start rounded-lg bg-white px-5 pt-5">
              <div className="mb-5 flex flex-col">
                <div className="mb-5 flex items-center">
                  <img src={method} alt="recipes icon" />
                  <h4 className=" ml-3 font-codecColdExtraBold text-MatTeal">
                    Method
                  </h4>
                </div>
                <div className="flex w-full flex-col">
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
        {/* recipe's gallery START*/}
        <div className="flex h-1/2 w-full flex-col">
          <div className="mt-5 h-full w-full justify-around rounded-lg bg-white pb-5">
            <div className="flex h-full w-full items-start rounded-lg bg-white px-5 pt-5">
              <div className="mb-5 flex flex-col">
                <div className="mb-5 flex items-center">
                  <img src={gallery} alt="recipes icon" />
                  <h4 className=" ml-3 font-codecColdExtraBold text-MatTeal">
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
        {/* recipe's gallery END*/}
      </div>
    </div>
  );
}
