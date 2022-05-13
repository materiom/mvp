import React from "react";
import { GoogleLogin } from "react-google-login";

function GoogleLoginButton() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      className=" max-h-min text-black opacity-100 border-blue-600 rounded-3xl px-3"
      clientId={process.env.REACT_APP_GOOGLE_KEY}
      buttonText="Log in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleLoginButton;
