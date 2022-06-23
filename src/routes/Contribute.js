// Import dependencies
import React from "react";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Custom components
import Header from "../components/Header";
import {
  BsArrowRight,
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsFileEarmarkSpreadsheet,
  BsFillJournalBookmarkFill,
  BsPlusSquare,
} from "react-icons/bs";

import support from "./../pictures/dashboard/support.svg";
import contributeHeader from "./../pictures/contribute/contribute-header.png";
import ContributeYourItemCard from "../components/contribute/ContributeYourItemCard";

export default function Contribute(props) {
  useUpdateTitle(props.title);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatNeutral">
      <Header activePage={"contribute"} />
      <div className="px-36 w-full h-full flex flex-col">
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
            <div className=" transition-all duration-300 flex items-center">
              <BsChevronCompactLeft className=" text-4xl text-MatLightGrey" />
            </div>
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
              <div className=" flex bg-white aspect-square rounded-full hover:shadow-xl duration-300">
                <img
                  className="min-w-[20px] h-6 m-auto"
                  src={support}
                  alt="Contact support"
                />
              </div>
              <h1 className=" text-lg text-MatDarkGrey pl-3">
                Need help?
              </h1>
              <div></div>
            </div>
          </div>
          <div className="flex-[1_0_18%] mx-2 flex justify-center items-center h-full bg-MatNeutral border-[1px] transition duration-300 border-MatNeutral rounded-lg hover:border-MatTeal">
            <div className="p-3 m-3 bg-white rounded-full">
              <BsFillJournalBookmarkFill color="#609690" size={42} />
            </div>
            <h1 className=" text-lg font-codecColdBold text-MatTeal w-3/4">
              Make a new contribution
            </h1>
          </div>
          <div className="flex-[1_0_18%]  mx-2 flex justify-center items-center h-full bg-MatNeutral border-[1px] transition duration-300 border-MatNeutral rounded-lg hover:border-MatTeal">
            <div className="p-3 m-3 bg-white rounded-full">
              <BsPlusSquare color="#609690" size={42} />
            </div>
            <h1 className=" text-lg font-codecColdBold text-MatTeal w-3/4">
              Make a new contribution
            </h1>
          </div>
          <div className="flex-[1_0_18%]  mx-2 flex justify-center items-center h-full bg-MatNeutral border-[1px] transition duration-300 border-MatNeutral rounded-lg hover:border-MatTeal">
            <div className="p-3 m-3 bg-white rounded-full">
              <BsFileEarmarkSpreadsheet color="#609690" size={42} />
            </div>
            <h1 className=" text-lg font-codecColdBold text-MatTeal w-3/4">
              Make a new contribution
            </h1>
          </div>
          <div className="flex-[1_0_18%]  mx-2 flex justify-center items-center h-full bg-MatNeutral border-[1px] transition duration-300 border-MatNeutral rounded-lg hover:border-MatTeal">
            <div className="p-3 m-3 bg-white rounded-full">
              <BsPlusSquare color="#609690" size={42} />
            </div>
            <h1 className=" text-lg font-codecColdBold text-MatTeal w-3/4">
              Make a new contribution
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
