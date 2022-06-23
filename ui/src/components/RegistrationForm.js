import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import bcrypt from "bcryptjs"

const checkPassword = (password) => {
  bcrypt.compare(password, "", function(err, result) {
    if (result) {
      console.log("Correct!")
   } else {
    console.log("Wrong!")

   }
});
}

function RegistrationForm() {
  const [password, updatePassword] = useState("");

  return (
    <div
      className={`flex flex-col items-center justify-between p-5 
     w-[80%] max-w-[500px] rounded-[10px] absolute
     top-[25%] left-[45%] shadow-2xl bg-white`}
    >
      <div className="text-left w-full">
        <h1 className="text-3xl mt-3 font-extrabold">Get Started</h1>

        <h6 className=" text-sm text-gray-500">
          Already have an account? <Link className=" text-MatBlue" to="/login">Login</Link>
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
            <input  className="custom-input" type="text" />
          </div>
          <div className="flex flex-col pb-3">
            <label htmlFor="">Email</label>
            <input  className="custom-input" type="email" />
          </div>
          <div className="flex flex-col pb-3">
            <label htmlFor="">Password</label>
            <input
               className="custom-input" value={password}
              onChange={(event) => updatePassword(event.target.value)}
              type="password"
            />
          </div>
          <div className="flex flex-col pb-3">
            <label htmlFor="">Confirm Password</label>
            <input  className="custom-input" type="password" />
          </div>
          <div className="flex flex-row-reverse pb-3">
            <label htmlFor="term" className=" text-xs">
              {" "}
              Creating an account means you are okay with our{" "}
              <a href="#">Terms of Service</a>, <a href="#"> Privacy Policy</a>{" "}
              and out default <a href="">Notification Setting</a>
            </label>
            <input  type="checkbox" className="custom-checkbox" />
          </div>

          <CustomButton
            displayText="Register"
            function={() => checkPassword(password)}
            color="blue"
          />
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
