import React, {useState} from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { hashPassword } from "../utils/user";

function RegistrationForm() {

  const [password, updatePassword] = useState('')

  return (
    <div
      className={`flex flex-col items-center justify-between p-5 
     w-[80%] max-w-[500px] rounded-[10px] absolute
     top-[25%] left-[45%] shadow-2xl bg-white`}
    >
      <div>
        <h1 className="text-3xl my-5">Get started</h1>
        <Link className=" no-underline" to="/login">
          Login
        </Link>
      </div>
      <div className="flex flex-col items-center h-full w-full">
        <h3 className=" mr-auto my-5">OR</h3>

        <form className="h-full flex flex-col justify-around w-full">
          <div className="flex flex-col pb-3">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="flex flex-col pb-3">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="flex flex-col pb-3">
            <label htmlFor="">Password</label>
            <input value={password} onChange={(event) => updatePassword(event.target.value)} type="password" />
          </div>
          <div className="flex flex-col pb-3">
            <label htmlFor="">Confirm Password</label>
            <input type="password" />
          </div>
          <div className="flex flex-row-reverse pb-3">
            <label htmlFor="term" className=" text-xs">
              {" "}
              Creating an account means you are okay with our{" "}
              <a href="#">Terms of Service</a>, <a href="#"> Privacy Policy</a>{" "}
              and out default <a href="">Notification Setting</a>
            </label>
            <input type="checkbox" className="custom-checkbox" />
          </div>

          <CustomButton
            displayText="Register"
            function={() => hashPassword(password)}
            color="blue"
          />
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
