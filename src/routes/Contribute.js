// Import dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import {
    BsChevronCompactLeft,
    BsChevronCompactRight,
    BsFileEarmarkSpreadsheet,
    BsFillJournalBookmarkFill,
    BsPlusSquare,
} from 'react-icons/bs'

// Hooks
import useUpdateTitle from '../hooks/UpdatePageTitle'

// Custom components
import Header from '../components/Header'
import ContributeYourItemCard from '../components/contribute/ContributeYourItemCard'

// Pictures
import contributeHeader from './../pictures/contribute/contribute-header.png'
import support from './../pictures/dashboard/support.svg'

export default function Contribute(props) {
    // update page title
    useUpdateTitle(props.title)

    return (
        <div className=" flex min-h-screen w-full flex-col bg-MatNeutral">
            <Header activePage={'contribute'} />
            <div className="flex h-full w-full flex-col px-36 py-5">
                <div className="flex max-h-48 w-full rounded-lg bg-MatLightGrey">
                    <div className="flex flex-col items-start p-5">
                        <h1 className=" text-3xl font-bold text-MatDarkGrey">
                            Welcome back, Liam!
                        </h1>
                        <h4 className="my-5 text-MatGrey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </h4>
                    </div>
                    <img
                        className="position relative rounded-r-lg"
                        src={contributeHeader}
                        alt="User submitting a recipe"
                    />
                </div>
                <div className="mt-5 flex w-full flex-col items-start rounded-lg bg-white p-5 ">
                    <h1 className=" font-codecColdExtraBold text-lg text-MatTeal">
                        Manage your contributions
                    </h1>

                    <div className="mt-5 flex w-full justify-around">
                        <BsChevronCompactLeft className="my-auto text-4xl text-MatLightGrey" />

                        <ContributeYourItemCard />
                        <ContributeYourItemCard />
                        <ContributeYourItemCard />
                        <ContributeYourItemCard />
                        <ContributeYourItemCard />
                        <BsChevronCompactRight className="my-auto text-4xl text-MatLightGrey" />
                    </div>
                </div>

                <div className="mt-5 flex w-full items-start justify-between rounded-xl bg-white p-5 ">
                    <div className="mr-2 flex h-full flex-[1_0_18%] flex-col justify-center">
                        <h1 className=" text-md font-codecColdBold text-MatTeal">
                            Make a new contribution
                        </h1>
                        <div className="flex rounded-lg bg-[url('./pictures/dashboard/help-box.jpg')] bg-cover bg-center p-5">
                            <a
                                data-cy="supportLink"
                                href="mailto:hello@materiom.org"
                                target="_blank"
                                rel="noreferrer"
                                className=" rounded-full bg-white duration-300 hover:shadow-xl"
                            >
                                <img
                                    className="m-auto h-6 min-w-[20px] p-1"
                                    src={support}
                                    alt="Contact support"
                                />
                            </a>
                            <h1 className=" pl-3 text-lg text-MatDarkGrey">
                                Need help?
                            </h1>
                            <div></div>
                        </div>
                    </div>
                    <div className="mx-2 flex h-full flex-[1_0_18%] items-center justify-center rounded-lg border-[1px] border-MatNeutral bg-MatNeutral transition duration-300 hover:border-MatTeal">
                        <Link
                            to="/new-recipe/terms"
                            className="flex items-center no-underline"
                        >
                            <div className="m-3 rounded-full bg-white p-3">
                                <BsFillJournalBookmarkFill
                                    color="#609690"
                                    size={42}
                                />
                            </div>
                            <h1 className=" w-3/4 font-codecColdBold text-lg text-MatTeal">
                                Read contribution guide
                            </h1>
                        </Link>
                    </div>
                    <div className="mx-2 flex h-full flex-[1_0_18%] items-center justify-center rounded-lg border-[1px] border-MatNeutral bg-MatNeutral transition duration-300 hover:border-MatTeal">
                        <Link
                            to="/new-recipe/terms"
                            className="flex items-center no-underline"
                        >
                            <div className="m-3 rounded-full bg-white p-3">
                                <BsPlusSquare color="#609690" size={42} />
                            </div>
                            <h1 className=" w-3/4 font-codecColdBold text-lg text-MatTeal">
                                Create new recipe
                            </h1>
                        </Link>
                    </div>
                    <div className="mx-2 flex h-full flex-[1_0_18%] items-center justify-center rounded-lg border-[1px] border-MatNeutral bg-MatNeutral transition duration-300 hover:border-MatTeal">
                        <Link
                            to="/new-recipe/terms"
                            className="flex items-center no-underline"
                        >
                            <div className="m-3 rounded-full bg-white p-3">
                                <BsFileEarmarkSpreadsheet
                                    color="#609690"
                                    size={42}
                                />
                            </div>
                            <h1 className=" w-3/4 font-codecColdBold text-lg text-MatTeal">
                                Contribute to existing recipe
                            </h1>
                        </Link>
                    </div>
                    <div className="mx-2 flex h-full flex-[1_0_18%] items-center justify-center rounded-lg border-[1px] border-MatNeutral bg-MatNeutral transition duration-300 hover:border-MatTeal">
                        <Link
                            to="/new-recipe/terms"
                            className="flex items-center no-underline"
                        >
                            <div className="m-3 rounded-full bg-white p-3">
                                <BsPlusSquare color="#609690" size={42} />
                            </div>
                            <h1 className=" w-3/4 font-codecColdBold text-lg text-MatTeal">
                                Make a new contribution
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
