// Dependencies
import React from "react";

// Components
import ContributeYourItemCard from "../../components/contribute/ContributeYourItemCard";
import Header from "../../components/Header";

// Hooks
import useUpdateTitle from "../../hooks/UpdatePageTitle";

export default function NewRecipeName(props) {
  // update page title
  useUpdateTitle(props.title);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey max-h-screen overflow-x-scroll custom-scrollbar">
      {/* Pass through a string to tell the header which tab to highlight */}
      <Header activePage="connect" />

      <div className="h-[85vh] flex justify-between flex-wrap w-full px-36 py-10 bg-MatLightGrey custom-scrollbar">
        {/* Search boxes START */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-start w-full pt-5 px-5 h-full bg-white rounded-lg">
            <h3 className="text-xl mb-5 font-codecColdExtraBold text-MatDarkGrey">
              Search Materiom Database
            </h3>
            <div className="flex w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Search by recipe title
              </h3>
            </div>
            <input className="my-5 text-lg italic rounded-lg" type="text" />
            <div className="flex w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Search by recipe code
              </h3>
            </div>
            <input className="my-5 text-lg italic rounded-lg" type="text" />
            {/* Search boxes START */}
            {/* Dummy Search results */}
            <div className="flex flex-col w-full justify-between">
              <h3 className="text-xl font-codecColdExtraBold text-MatDarkGrey">
                Search results
              </h3>
              <div className="flex w-full overflow-y-scroll flex-wrap max-h-[40vh]">
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
