// Import dependencies
import React from "react";
import useUpdateTitle from "../hooks/UpdatePageTitle";

export default function EditProfile(props) {
  useUpdateTitle(props.title);

  return <div className="min-h-[100vh] flex mx-24">Edit Profile</div>;
}
