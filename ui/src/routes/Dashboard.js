// Import dependencies
import React from "react";
import { Outlet } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import Header from "../components/DashboardHeader";
import DashboardItem from "../components/DashboardItem";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Custom components
import HelpBox from "../components/HelpBox";
import SideBar from "../components/SideBar";
import SignOutButton from "../components/SignOutButton";

import profilePic from "./../pictures/profile.jpg";
import DashboardMenuItem from "../components/DashboardItem";
import Contribute from "./Contribute";

export default function Dashboard(props) {
  useUpdateTitle(props.title);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-neutral-100">
      <Header activePage={"dashboard"} />
      <div className="px-36 w-full h-full flex flex-col">
        <div className="w-full flex rounded-xl bg-MatTeal h-32 items-center p-5">
          <img
            src={profilePic}
            alt=""
            className="h-20 w-20 rounded-full mr-5"
          />
          <div className="flex flex-col">
            <h6 className="text-sm text-slate-300">Dashboard</h6>
            <h1 className=" text-3xl font-bold text-white">
              Welcome back, Liam!
            </h1>
          </div>
        </div>
        <div className="w-full h-full flex">
          <div className="h-full flex justify-between flex-wrap w-2/3 group-odd:">
            <DashboardMenuItem
              title="contribute"
              description={"View & Make Contributions"}
            />
            <DashboardMenuItem title="analyse" description={"Data Commons"} />
            <DashboardMenuItem title="connect" description={"User Directory"} />
            <DashboardMenuItem title="edit" description={"Your Profile"} />
          </div>
          <div className="w-1/3 h-full min-h-full">
            <HelpBox />
          </div>
        </div>
      </div>
    </div>
  );
}
