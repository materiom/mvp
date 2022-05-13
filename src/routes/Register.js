import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import picture from "./../images/registration.jpg";

function Register() {
  return (
    <div className="flex h-screen">
      <div className="flex col h-full  w-4/12">
        <img src={picture} alt="" className=" object-cover" />
      </div>

      <div className="flex col items-center justify-center h-full w-6/12">
        <RegistrationForm />
      </div>

      <div className="flex col justify-center w-2/12 text-xs pt-5">
        <p>
          Already a member? <Link to="/login">Sign in now</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
