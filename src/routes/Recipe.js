// Dependencies
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

// Pictures
import time from '../pictures/recipe/time.svg'
import composition from '../pictures/recipe/composition.svg'
import properties from '../pictures/recipe/properties.svg'
import method from '../pictures/recipe/method.svg'
import gallery from '../pictures/recipe/gallery.svg'

// Components
import ToolsList from '../components/recipe/ToolsList'
import ProcessList from '../components/recipe/ProcessList'
import IngredientsList from '../components/recipe/IngredientsList'
import MethodList from '../components/recipe/MethodList'
import Gallery from '../components/recipe/Gallery'
import DifficultyIcon from '../components/recipe/DifficultyIcon'

// Hooks
import { ConvertHtmlToString } from '../hooks/ConvertHtmlToString'
import useUpdateTitle from '../hooks/UpdatePageTitle'

export default function Recipe(props) {
    // update page title
    useUpdateTitle(props.title)

    // get parameters from the router url
    const params = useParams()

    // set initial state
    const [recipe, updateRecipe] = useState({})

    // dummy fetch recipe data
    const getRecipe = () => {
        fetch(`https://materiom.org/api/recipe/${params.recipeId}`)
            .then(function (response) {
                // The response is a Response instance.
                // You parse the data into a useable format using `.json()`
                return response.json()
            })
            .then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                console.log(data)
                updateRecipe(data)
            })
            .catch((error) => console.error)
    }

    // update state upon initial render
    useEffect(() => {
        getRecipe()
        // if you return a function from useEffect is will fire
        // when the component is removed from the DOM to help
        // keep state clean
        return () => updateRecipe({})
    }, [])

    return (
        <div className=" custom-scrollbar flex max-h-screen min-h-screen w-full flex-col overflow-x-scroll bg-MatLightGrey">
            <Header activePage="connect" />

            <div className="custom-scrollbar flex h-full w-full flex-wrap justify-between bg-MatLightGrey px-36 py-10">
                {/* Recipe details START */}
                <div className="flex h-1/2 w-full flex-col">
                    <div className="h-full w-full justify-around rounded-lg bg-white pl-5 pt-5 pb-5">
                        <div className="flex justify-between pr-5 pb-5">
                            <div className="flex flex-col items-start">
                                <h5 className="text-sm text-MatDarkGrey">
                                    Ref:{' '}
                                    {recipe.ref_code
                                        ? ConvertHtmlToString(recipe.ref_code)
                                        : 'N/A'}{' '}
                                    |{' '}
                                    {recipe.created_at
                                        ? // the line below splits the date at the ' ' and returns
                                          // the first part to remove the time and return the date only
                                          recipe.created_at.split(' ')[0]
                                        : 'N/A'}{' '}
                                    | V1
                                </h5>
                                <h4 className="font-codecColdExtraBold capitalize text-MatTeal">
                                    {recipe.name}
                                </h4>
                            </div>

                            <div className="w- flex items-center rounded-lg bg-MatLightGrey px-5 text-MatDarkGrey">
                                <div className="flex w-1/5">
                                    <h5 className="text-xl">+</h5>
                                </div>
                                <div className="flex h-full w-40 items-center justify-center border-l-2 border-white text-sm">
                                    <h4>Add to favorites</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-72 w-full">
                            <div className="flex w-full">
                                <div
                                    className={
                                        'flex w-1/2 min-w-[50%] ' +
                                        (!recipe.thumbnail_src &&
                                            'bg-MatDarkGrey')
                                    }
                                >
                                    {recipe.thumbnail_src && (
                                        <img
                                            className="w-full min-w-full object-cover object-center"
                                            src={`https://materiom.org/storage/${recipe.thumbnail_src}`}
                                        />
                                    )}
                                </div>
                                <div className="flex w-1/2 flex-col justify-around bg-MatLightGrey p-5">
                                    <div className="flex">
                                        <div className="flex flex-col">
                                            <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                                Created by:
                                            </h5>
                                            <h6 className="text-xs text-MatDarkGrey">
                                                {recipe.author
                                                    ? ConvertHtmlToString(
                                                          recipe.author
                                                      )
                                                    : 'N/A'}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <div className="flex w-1/2 flex-col">
                                            <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                                Contributors
                                            </h5>
                                            <h6 className="text-xs text-MatDarkGrey">
                                                {recipe.contributors
                                                    ? recipe.contributors
                                                    : 'N/A'}
                                            </h6>
                                        </div>
                                        <div className="flex w-1/2 flex-col">
                                            <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                                Source
                                            </h5>
                                            <h6 className="text-xs text-MatDarkGrey">
                                                {recipe.source
                                                    ? ConvertHtmlToString(
                                                          recipe.source
                                                      )
                                                    : 'N/A'}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <div className="flex w-1/2 flex-col">
                                            <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                                License
                                            </h5>
                                            <h6 className="text-xs text-MatDarkGrey">
                                                {recipe.license
                                                    ? ConvertHtmlToString(
                                                          recipe.license
                                                      )
                                                    : 'N/A'}
                                            </h6>
                                        </div>
                                        <div className="flex w-1/2 flex-col">
                                            <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                                Difficulty
                                            </h5>
                                            <h6 className="text-xs text-MatDarkGrey">
                                                {recipe.difficulty ? (
                                                    <DifficultyIcon
                                                        difficulty={
                                                            recipe.difficulty
                                                        }
                                                    />
                                                ) : (
                                                    'N/A'
                                                )}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-5">
                            <div className="flex w-full flex-col">
                                <div className="flex flex-col">
                                    <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                        Description
                                    </h5>
                                    <h6 className="text-xs text-MatDarkGrey">
                                        {recipe.description
                                            ? recipe.description
                                            : 'N/A'}
                                    </h6>
                                </div>

                                <div className="flex flex-col">
                                    <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                        Preparation time
                                    </h5>
                                    <h6 className="flex items-center text-xs text-MatDarkGrey">
                                        <img
                                            src={time}
                                            alt="time icon"
                                            className="mr-1"
                                        />
                                        {recipe.prep_time
                                            ? recipe.prep_time
                                            : 'N/A'}
                                    </h6>
                                </div>
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex flex-col">
                                    <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                        Tools
                                    </h5>
                                    {recipe.tools ? (
                                        <ToolsList tools={recipe.tools} />
                                    ) : (
                                        'N/A'
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <h5 className="font-codecColdBold text-base text-MatDarkGrey">
                                        Process
                                    </h5>
                                    <h6 className="text-xs text-MatDarkGrey">
                                        {recipe.tools ? (
                                            <ProcessList
                                                processes={recipe.processes}
                                            />
                                        ) : (
                                            'N/A'
                                        )}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recipe details END*/}

                {/* Recipe ingredients START */}
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
                                    <IngredientsList
                                        ingredients={recipe.ingredients}
                                    />
                                ) : (
                                    'N/A'
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
                {/* Recipe ingredients END*/}

                {/* Recipe's method START*/}
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
                                        'N/A'
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recipe's method END*/}

                {/* Recipe's gallery START*/}
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
                                        'N/A'
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
    )
}
