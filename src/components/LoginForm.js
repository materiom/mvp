import React from "react";
import ArrowButton from "./ArrowButton";
import GoogleLogin from "./GoogleLoginButton";
import TwitterLoginButton from "./TwitterLoginButton";

function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-between p-5 h-[80vh] w-[80%] max-w-[500px]">
      <h1 className="text-3xl my-5">Sign in to Materiom</h1>
      <div className="flex flex-col items-center h-full w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <GoogleLogin />
          <TwitterLoginButton />
        </div>
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

          <ArrowButton
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
