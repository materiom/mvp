// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Header from '../../components/Header'

// Hooks
import useUpdateTitle from '../../hooks/UpdatePageTitle'

export default function NewRecipeName(props) {
    // update page title
    useUpdateTitle(props.title)

    return (
        <div className=" custom-scrollbar flex max-h-screen min-h-screen w-full flex-col overflow-x-scroll bg-MatLightGrey">
            {/* Pass through a string to tell the header which tab to highlight */}
            <Header activePage="contribute" />

            <div className="custom-scrollbar flex h-[85vh] w-full flex-wrap justify-between bg-MatLightGrey px-36 py-10">
                {/* Recipe warning START */}
                <div className="flex h-1/5 w-full flex-col">
                    <div className="flex h-full w-full flex-col items-start rounded-lg bg-white px-5 pt-5">
                        <h3 className="font-codecColdExtraBold text-xl text-MatDarkGrey">
                            New recipe
                        </h3>
                        <div className="my-5 flex w-full items-center justify-between">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Recipe warning END*/}

                {/* edit title START */}

                <div className="mt-5 flex h-1/5 w-full flex-col">
                    <div className="flex h-full w-full flex-col items-start rounded-lg bg-white px-5 pt-5">
                        <div className="flex w-full justify-between">
                            <h3 className="font-codecColdExtraBold text-xl text-MatDarkGrey">
                                Recipe title
                            </h3>
                            <h3 className="font-codecCold text-xl text-MatDarkGrey">
                                Required
                            </h3>
                        </div>
                        <input className="my-5 text-lg italic" />
                    </div>
                </div>
                {/* edit title END*/}

                {/* recipe code START */}

                <div className="mt-5 flex h-1/5 w-full flex-col">
                    <div className="flex h-full w-full flex-col items-start rounded-lg bg-white px-5 pt-5">
                        <div className="flex w-full justify-between">
                            <h3 className="font-codecColdExtraBold text-xl text-MatDarkGrey">
                                Recipe code
                            </h3>
                        </div>
                        <h4 className="my-5 text-lg italic">AGeCh5</h4>
                    </div>
                </div>
                {/* recipe code END*/}

                {/* choose recipe method START*/}
                <div className="flex h-1/5 w-full pt-5">
                    <div className="flex h-full w-full flex-col items-start rounded-lg bg-white px-5 pt-5">
                        <div className="flex w-full justify-between">
                            <h3 className="font-codecColdExtraBold text-xl text-MatDarkGrey">
                                Create new recipe from:
                            </h3>
                        </div>
                        <div className="my-5 flex w-full items-center justify-between">
                            <Link
                                className="flex w-full justify-center"
                                to="/new-recipe/submission"
                            >
                                <button className="blue-button mx-3">
                                    Submission form
                                </button>
                            </Link>
                            <Link
                                className="flex w-full justify-center"
                                to="/new-recipe/fork"
                            >
                                <button className="blue-button mx-3">
                                    Fork existing recipe
                                </button>
                            </Link>
                            <Link className="flex w-full justify-center" to="">
                                <button className="blue-button mx-3">
                                    CSV upload
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* choose recipe method END*/}
                </div>
            </div>
        </div>
    )
}
