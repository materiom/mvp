import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

function LoginForm() {
  return (
    <div
      className={`flex flex-col items-center justify-between p-5 
    w-[80%] max-w-[500px] rounded-[10px] absolute
     top-[25%] left-[45%] shadow-2xl bg-white`}
    >
      <div className="text-center">
        <h1 className="text-3xl my-5 ">Get Started</h1>
        <Link className=" no-underline" to="/register">
          Register
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex flex-row justify-center items-center w-full"></div>
        <h3 className=" mr-auto my-5">OR</h3>
        <form className="h-full flex flex-col  w-full">
          <div className="flex flex-col pb-5">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="flex flex-col pb-5">
            <div className="flex justify-between">
              <label htmlFor="">Password</label>
              <a href="">Forgotten password?</a>
            </div>
            <input type="password" />
          </div>

          <CustomButton
            style={{ margin: "auto" }}
            displayText="Login"
            function={() => alert("Working on it :)")}
            color="blue"
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
