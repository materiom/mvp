// Dependencies
import React from "react";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Components
import UserFilterMenu from "../components/userDirectory/UserFilterMenu";
import Header from "../components/Header";

// Dummy data
//import {userData} from "./../testUsers"

export default function UserDirectory(props) {
  // update page title
  useUpdateTitle(props.title);

  return (
    <div className="flex min-h-screen w-full flex-1 flex-col overflow-hidden bg-MatLightGrey">
      <Header activePage={"connect"} />
      <div className="flex h-auto w-full flex-1 overflow-hidden px-36 py-5">
        <div className="flex w-1/3 flex-col overflow-hidden pr-5">
          <UserFilterMenu />
        </div>
        <div className="flex w-2/3 flex-col overflow-hidden ">
          {/* Commented out until real user data is available */}
          {/* <UserTable users={userData}/> */}
        </div>
      </div>
    </div>
  );
}
