import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
  return (
    <h1>
      Welcome {props.name} {props.greeting} {props.experience}
    </h1>
  );
};

export default FunctionalGreetingWithProps;
