//  Dependencies
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//  Components
import CustomButton from "./CustomButton";

export default function LoginForm() {
  //  set  initial  state
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");

  //  function  to  log  user  in
  const Login = async () => {
    const rawResponse = await fetch(`${process.env.REACT_APP_DB_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const content = await rawResponse.json();

    console.log(content);
  };

  return (
    <div
      data-cy="login-form"
      className={`absolute  top-[25%]  left-[45%]  flex  w-[80%]  
        max-w-[500px]  flex-col  items-center  justify-between
          rounded-[10px]  bg-white  p-5  shadow-2xl`}
    >
      <div className="w-full  text-left">
        <h1 className="mt-3  text-3xl  font-extrabold">Get Started</h1>

        <h6 className="  text-sm  text-gray-500">
          Don't have an account? <Link to="/register">Register here</Link>
        </h6>
      </div>

      <div className="flex  h-full  w-full  flex-col  items-center  justify-center">
        <button className="max-w-400px  my-5  h-10  w-[75%]  rounded-lg  border-[1px]  border-gray-400  p-2  text-sm  font-bold">
          Sign in with Google
        </button>

        <div className="row  flex  w-full  items-center  justify-between">
          <hr className="  w-[45%]  bg-slate-400" />
          <h4 className="  text-slate-400">or</h4>
          <hr className="  w-[45%]  bg-slate-400" />
        </div>
        <form className="flex  h-full  w-full    flex-col">
          <div className="flex  flex-col  pb-5">
            <label htmlFor="">Email</label>

            <input
              className="custom-input"
              type="email"
              value={email}
              onChange={(event) => updateEmail(event.target.value)}
            />
          </div>

          <div className="flex  flex-col  pb-5">
            <div className="flex  justify-between">
              <label htmlFor="">Password</label>

              <Link to="/password-reset">Forgotten password?</Link>
            </div>

            <input
              className="custom-input"
              type="password"
              value={password}
              onChange={(event) => updatePassword(event.target.value)}
            />
          </div>

          <CustomButton
            style={{ margin: "auto" }}
            displayText="Login"
            function={() => Login()}
            color="blue"
          />
        </form>
      </div>
    </div>
  );
}
