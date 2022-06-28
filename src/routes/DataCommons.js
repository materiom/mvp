// Import dependencies
import React from "react";
import Header from "../components/Header";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Custom components
import DataFilterMenu from "../components/dataCommons/DataFilterMenu";
import DataSearchBar from "../components/dataCommons/DataSearchBar";
import DataSearchDisplay from "../components/dataCommons/DataSearchDisplay";

export default function UserDirectory(props) {
  useUpdateTitle(props.title);

  return (
    <div className="overflow-hidden min-h-screen w-full flex-1 flex flex-col bg-neutral-100">
      <Header activePage={"analyse"} />
      <div className="px-36 w-full flex min-h-[80vh] overflow-hidden flex-1 pt-5">
        <div className="flex flex-col h-full w-1/3 overflow-hidden pr-5">
        <DataFilterMenu />
        </div>
        <div className="flex flex-col w-2/3 overflow-hidden max-h-[75vh] rounded-b-lg">
          <DataSearchBar />
          <DataSearchDisplay/> 
        </div>
      </div>
    </div>
  );
}
