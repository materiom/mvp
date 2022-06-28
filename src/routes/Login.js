import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import picture from "./../pictures/login/background.webp";
import pattern from "./../pictures/login/pattern.svg";
import logo from "./../pictures/full-logo.svg";
import useUpdateTitle from "./../hooks/UpdatePageTitle";

function Login(props) {
  useUpdateTitle(props.title);

  return (
    <div className="flex h-screen">
      <a href="https://materiom.org" target="_blank">
        <img
          src={logo}
          alt=""
          href="https://www.materiom.org"
          className=" absolute top-10 left-36"
        />
      </a>
      <div className="flex col h-full w-6/12">
        <img src={picture} alt="" className=" object-cover" />
      </div>

      <div className="flex col items-center justify-center h-full w-6/12">
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

export default Login;
