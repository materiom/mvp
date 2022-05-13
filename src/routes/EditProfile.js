// Import dependencies
import React from "react";
import { Outlet } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import DashboardItem from "../components/DashboardItem";
import HelpBox from "../components/HelpBox";
import SignOutButton from "../components/SignOutButton";

// Custom components

import profilePic from "./../images/profile.jpg";

export default function EditProfile(props) {
  return (
    <div className="min-h-[100vh] flex mx-24">
      <div className="flex flex-1 flex-col items-start w-full mt-24 ">
        <div className=" flex p-5 items-center w-full justify-center">
          <img
            src={profilePic}
            alt="User profile picture"
            className="rounded-full max-h-32 min-h-[8rem] min mx-5"
          />
          <div className="flex flex-col ml-5">
            <h2 className=" text-3xl">Welcome back, Liam!</h2>
            <h2 className=" text-3xl flex justify-between my-3">
              👋
              <ArrowButton
                displayText="Edit Profile"
                function={() => alert("Working on it :)")}
                color="blue"
              />
            </h2>
          </div>
        </div>
        <div className="flex h-[50%] flex-wrap my-auto">
          <DashboardItem title={"Contribute to Materiom"} />
          <DashboardItem title={"User Directory"} />
          <DashboardItem title={"Data Commons"} />
          <DashboardItem title={"Edit Your profile"} />
        </div>
      </div>
      <div className="flex flex-col min-h-full mt-24 items-end">
        <SignOutButton
          displayText="Sign Out"
          function={() => alert("Working on it :)")}
          color="red-inverse"
        />
        <div className="m-auto">
          <HelpBox />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
