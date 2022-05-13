import React from "react";
import TwitterLogin from "react-twitter-login";

function TwitterLoginButton (props) {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
      <div >
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={process.env.REACT_APP_TWITTER_API_KEY}
      consumerSecret={process.env.REACT_APP_TWITTER_SECRET_API_KEY}
    />

      </div>
  );
};


export default TwitterLoginButton