import React from "react";

const UserMessage = (props) => {
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
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
};

export default UserMessage;
