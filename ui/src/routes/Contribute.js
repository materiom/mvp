// Import dependencies
import React from "react";
import { Outlet } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import DashboardHeader from "../components/DashboardHeader";
import DashboardItem from "../components/DashboardItem";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Custom components
import HelpBox from "../components/HelpBox";
import SideBar from "../components/SideBar";
import SignOutButton from "../components/SignOutButton";

import profilePic from "./../pictures/profile.jpg";

export default function Contribute(props) {

  useUpdateTitle(props.title);
  
  return (
    <div className=" w-full flex flex-col">
        <DashboardHeader activePage={"contribute"}/>
    </div>
  );
}
