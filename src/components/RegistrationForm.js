import React, { useEffect, useState } from "react";
import { FiCircle, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import register from "../db/register";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

function RegistrationForm() {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [passwordConfirm, updatePasswordConfirm] = useState("");
  const [passwordsMatch, updatePasswordsMatch] = useState(false);
  const [showPassword, handleShowPassword] = useState(false);

  const Register = async () => {
    const rawResponse = await fetch(
      `${process.env.REACT_APP_DB_URL}/register`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const content = await rawResponse.json();

    console.log(content);
  };

  useEffect(() => {
    if (password !== passwordConfirm) {
      updatePasswordsMatch(false);
    } else {
      updatePasswordsMatch(true);
    }
  }, [password, passwordConfirm]);

  useEffect(() => {
    console.log(passwordsMatch);
  }, [passwordsMatch]);

  useEffect(() => {
    console.log(passwordsMatch)

    return () => {
      // Anything in here is fired on component unmount.
      updateEmail("")
      updatePassword("")
      updatePasswordConfirm("")
      updatePasswordsMatch(false)
      handleShowPassword(false)
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-between p-5 
     w-[80%] max-w-[500px] rounded-[10px] absolute
     top-[25%] left-[45%] shadow-2xl bg-white`}
    >
      <div className="text-left w-full">
        <h1 className="text-3xl mt-3 font-extrabold">Get Started</h1>

        <h6 className=" text-sm text-gray-500">
          Already have an account?{" "}
          <Link className=" text-MatBlue" to="/login">
            Login
          </Link>
        </h6>
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full">
        <button className="my-5 border-[1px] border-gray-400 rounded-lg p-2 text-sm font-bold h-10 w-[75%] max-w-400px">
          Sign in with Google
        </button>

        <div className="flex row w-full items-center justify-between">
          <hr className=" bg-slate-400 w-[45%]" />
          <h4 className=" text-slate-400">or</h4>
          <hr className=" bg-slate-400 w-[45%]" />
        </div>

        <form className="h-full flex flex-col justify-around w-full">
          <div className="flex flex-col pb-3">
            <label htmlFor="">Name</label>
            <input className="custom-input" type="text" />
          </div>
          <div className="flex flex-col pb-3">
            <label htmlFor="">Email</label>
            <input
              className="custom-input"
              type="email"
              value={email}
              onChange={(event) => updateEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col pb-3">
            <label className="flex items-center" htmlFor="">
              Password
              <FiEye
                className="ml-3"
                onClick={() => handleShowPassword(!showPassword)}
              />
            </label>
            <input
              className="custom-input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => updatePassword(event.target.value)}
            />
          </div>
          <div className="flex flex-col pb-3">
            <label className="flex items-center" htmlFor="">
              Confirm Password
              <FiCircle className="ml-3" fill={passwordsMatch && password.length > 0 ? "#609690" : "#b3243c"} />
            </label>
            <input
              className="custom-input"
              type={showPassword ? "text" : "password"}
              value={passwordConfirm}
              onChange={(event) => updatePasswordConfirm(event.target.value)}
            />
          </div>
          <div className="flex flex-row-reverse pb-3">
            <label htmlFor="term" className=" text-xs">
              {" "}
              Creating an account means you are okay with our{" "}
              <a href="/#">Terms of Service</a>,{" "}
              <a href="/#"> Privacy Policy</a> and out default{" "}
              <a href="/#">Notification Setting</a>
            </label>
            <input type="checkbox" className="custom-checkbox" />
          </div>

          <CustomButton
            displayText="Register"
            function={() => register(email, password)}
            color="blue"
          />
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
