// Dependencies
import React from "react";

// Components
import LoginForm from "../components/LoginForm";

// Pictures
import picture from "./../pictures/login/background.webp";
import pattern from "./../pictures/login/pattern.svg";
import logo from "./../pictures/full-logo.svg";

// Hooks
import useUpdateTitle from "./../hooks/UpdatePageTitle";

export default function Login(props) {
  // update page title
  useUpdateTitle(props.title);

  return (
    <div className="flex h-screen">
      <a href="https://materiom.org" rel="noreferrer" target="_blank">
        <img
          src={logo}
          alt=""
          href="https://www.materiom.org"
          className=" absolute top-10 left-36"
        />
      </a>
      <div className="col flex h-full w-6/12">
        <img src={picture} alt="" className=" object-cover" />
      </div>

      <div className="col flex h-full w-6/12 items-center justify-center">
        <LoginForm />
      </div>
      <img
        src={pattern}
        alt=""
        className=" absolute bottom-[-50%] right-[-10%] -z-10"
      />
    </div>
  );
}
