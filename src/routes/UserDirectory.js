// Dependencies
import React from "react";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Components
import UserFilterMenu from "../components/userDirectory/UserFilterMenu";
import UserTable from "../components/userDirectory/UserTable";
import Header from "../components/Header";

// Dummy data
//import {userData} from "./../testUsers"

export default function UserDirectory(props) {
  // update page title
  useUpdateTitle(props.title);

  return (
    <div className="overflow-hidden min-h-screen w-full flex-1 flex flex-col bg-MatLightGrey">
      <Header activePage={"connect"} />
      <div className="px-36 w-full flex h-auto overflow-hidden flex-1 py-5">
        <div className="flex flex-col w-1/3 overflow-hidden pr-5">
        <UserFilterMenu />
        </div>
        <div className="flex flex-col w-2/3 overflow-hidden ">
          {/* Commented out until real user data is available */}
          {/* <UserTable users={userData}/> */}
        </div>
      </div>
    </div>
  );
}
