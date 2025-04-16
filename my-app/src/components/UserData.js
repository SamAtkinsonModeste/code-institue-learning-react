import React from "react";

const UserData = (props) => {
  return <h1>{props.isLoaded ? "Data Loaded!" : "Loading....."}</h1>;
};

export default UserData;
