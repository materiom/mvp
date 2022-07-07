// Dependencies
import React from "react";

// Hooks
import useUpdateTitle from "../hooks/UpdatePageTitle";

export default function EditProfile(props) {
  {/* Pass through a string to tell the header which tab to highlight */}
  useUpdateTitle(props.title);

  return <div className="min-h-[100vh] flex mx-24">Edit Profile</div>;
}
