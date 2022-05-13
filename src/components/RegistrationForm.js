import React from "react";
import ArrowButton from "./ArrowButton";

function RegistrationForm() {
  return (
    <div className="flex flex-col items-center justify-between p-5 h-[80vh] max-w-[400px]">
      <h1 className="text-3xl my-5">Register for Materiom</h1>
      <div className="flex flex-col items-center h-full w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <button className="bg-blue-400 rounded p-3 text-xs">
            Sign up with Google
          </button>
          <button className="bg-blue-800 rounded p-3 text-xs">
            Sign up with Twitter
          </button>
        </div>
        <h3 className=" mr-auto my-5">OR</h3>
        <form className="h-full flex flex-col justify-around w-full">
          <div className="flex flex-col pb-5">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="flex flex-col pb-5">
            <label htmlFor="">Username</label>
            <input type="email" />
          </div>
          <div className="flex flex-col pb-5">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div className="flex flex-col pb-5">
            <label htmlFor="">Confirm Password</label>
            <input type="password" />
          </div>
          <div className="flex flex-row-reverse pb-5">
            <label htmlFor="term" className=" text-xs">
              {" "}
              Creating an account means you are okay with our{" "}
              <a href="#">Terms of Service</a>, <a href="#"> Privacy Policy</a>{" "}
              and out default <a href="">Notification Setting</a>
            </label>
            <input type="checkbox" className="custom-checkbox"/>
          </div>

          <ArrowButton
              displayText="Register"
              function={() => alert("Working on it :)")}
              color="blue"
            />
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
