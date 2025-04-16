import React from "react";

const MethodsAsPropsChild = (props) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <p>Welcome to the site!</p>
          <p> Please complete these steps below:</p>
          <ol>
            <li>Confirm your email</li>
            <li>Complete your profile</li>
            <li>Subscribe to the newsletter</li>
          </ol>
          <button onClick={props.handleSignIn}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={props.handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default MethodsAsPropsChild;
