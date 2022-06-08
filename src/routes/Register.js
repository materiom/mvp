import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import picture from "./../pictures/login/background.webp"
import pattern from "./../pictures/login/pattern.svg"



function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex col h-full w-6/12">
        <img src={picture} alt="" className=" object-cover" />
      </div>

      <div className="flex col items-center justify-center h-full w-6/12">
        <RegistrationForm />
      </div>
      <img src={pattern} alt="" className=" absolute bottom-0 right-0 -z-10 max-h-[75%]" />
    </div>
  );
}

export default Login;
