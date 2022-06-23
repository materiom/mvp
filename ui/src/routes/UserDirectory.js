// Import dependencies
import React from "react";
import { Outlet } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import Header from "../components/Header";
import DashboardItem from "../components/DashboardItem";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Custom components
import HelpBox from "../components/HelpBox";
import SideBar from "../components/SideBar";
import SignOutButton from "../components/SignOutButton";

import profilePic from "./../pictures/profile.jpg";
import CustomToggle from "../components/CustomToggle";
import UserFilterMenu from "../components/UserFilterMenu";
import UserTable from "../components/UserTable";

import {userData} from "./../testUsers"

export default function UserDirectory(props) {
  useUpdateTitle(props.title);

  return (
    <div className="overflow-hidden min-h-screen w-full flex-1 flex flex-col bg-neutral-100">
      <Header activePage={"connect"} />
      <div className="px-36 w-full flex h-auto overflow-hidden flex-1">
        <div className="flex flex-col w-1/3 overflow-hidden pr-5">
        <UserFilterMenu />
        </div>
        <div className="flex flex-col w-2/3 overflow-hidden ">
          <UserTable users={userData}/>
        </div>
      </div>
    </div>
  );
}
