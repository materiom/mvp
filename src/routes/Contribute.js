// Import dependencies
import React from "react";
import { Link } from "react-router-dom";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsFileEarmarkSpreadsheet,
  BsFillJournalBookmarkFill,
  BsPlusSquare,
} from "react-icons/bs";

// Hooks
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Custom components
import Header from "../components/Header";
import ContributeYourItemCard from "../components/contribute/ContributeYourItemCard";

// Pictures
import contributeHeader from "./../pictures/contribute/contribute-header.png";
import support from "./../pictures/dashboard/support.svg";

export default function Contribute(props) {
  // update page title
  useUpdateTitle(props.title);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatNeutral">
      <Header activePage={"contribute"} />
      <div className="px-36 w-full h-full flex flex-col py-5">
        <div className="w-full flex bg-MatLightGrey rounded-lg max-h-48">
          <div className="flex flex-col items-start p-5">
            <h1 className=" text-3xl font-bold text-MatDarkGrey">
              Welcome back, Liam!
            </h1>
            <h4 className="text-MatGrey my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h4>
          </div>
          <img
            className="position relative rounded-r-lg"
            src={contributeHeader}
            alt="User submitting a recipe"
          />
        </div>
        <div className="w-full flex flex-col items-start rounded-lg bg-white p-5 mt-5 ">
          <h1 className=" text-lg font-codecColdExtraBold text-MatTeal">
            Manage your contributions
          </h1>

          <div className="flex w-full justify-around mt-5">
            <BsChevronCompactLeft className="my-auto text-4xl text-MatLightGrey" />

            <ContributeYourItemCard />
            <ContributeYourItemCard />
            <ContributeYourItemCard />
            <ContributeYourItemCard />
            <ContributeYourItemCard />
            <BsChevronCompactRight className="my-auto text-4xl text-MatLightGrey" />
          </div>
        </div>

        <div className="w-full flex justify-between items-start rounded-xl bg-white p-5 mt-5 ">
          <div className="flex-[1_0_18%] flex-col mr-2 flex justify-center h-full">
            <h1 className=" text-md font-codecColdBold text-MatTeal">
              Make a new contribution
            </h1>
            <div className="rounded-lg flex p-5 bg-center bg-cover bg-[url('./pictures/dashboard/help-box.jpg')]">
              <a
                data-cy="supportLink"
                href="mailto:hello@materiom.org"
                target="_blank"
                rel="noreferrer"
                className=" bg-white rounded-full hover:shadow-xl duration-300"
              >
                <img
                  className="min-w-[20px] h-6 m-auto p-1"
                  src={support}
                  alt="Contact support"
                />
              </a>
              <h1 className=" text-lg text-MatDarkGrey pl-3">Need help?</h1>
              <div></div>
            </div>
          </div>
          <div className="flex-[1_0_18%] mx-2 flex justify-center items-center h-full bg-MatNeutral border-[1px] transition duration-300 border-MatNeutral rounded-lg hover:border-MatTeal">
            <Link
              to="/new-recipe/terms"
              className="flex items-center no-underline"
            >
              <div className="p-3 m-3 bg-white rounded-full">
                <BsFillJournalBookmarkFill color="#609690" size={42} />
              </div>
              <h1 className=" text-lg font-codecColdBold text-MatTeal w-3/4">
                Read contribution guide
              </h1>
            </Link>
          </div>
          <div className="flex-[1_0_18%]  mx-2 flex justify-center items-center h-full bg-MatNeutral border-[1px] transition duration-300 border-MatNeutral rounded-lg hover:border-MatTeal">
            <Link
              to="/new-recipe/terms"
              className="flex items-center no-underline"
            >
              <div className="p-3 m-3 bg-white rounded-full">
                <BsPlusSquare color="#609690" size={42} />
              </div>
              <h1 className=" text-lg font-codecColdBold text-MatTeal w-3/4">
                Create new recipe
              </h1>
            </Link>
          </div>
          <div className="flex-[1_0_18%]  mx-2 flex justify-center items-center h-full bg-MatNeutral border-[1px] transition duration-300 border-MatNeutral rounded-lg hover:border-MatTeal">
            <Link
              to="/new-recipe/terms"
              className="flex items-center no-underline"
            >
              <div className="p-3 m-3 bg-white rounded-full">
                <BsFileEarmarkSpreadsheet color="#609690" size={42} />
              </div>
              <h1 className=" text-lg font-codecColdBold text-MatTeal w-3/4">
                Contribute to existing recipe
              </h1>
            </Link>
          </div>
          <div className="flex-[1_0_18%]  mx-2 flex justify-center items-center h-full bg-MatNeutral border-[1px] transition duration-300 border-MatNeutral rounded-lg hover:border-MatTeal">
            <Link
              to="/new-recipe/terms"
              className="flex items-center no-underline"
            >
              <div className="p-3 m-3 bg-white rounded-full">
                <BsPlusSquare color="#609690" size={42} />
              </div>
              <h1 className=" text-lg font-codecColdBold text-MatTeal w-3/4">
                Make a new contribution
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
