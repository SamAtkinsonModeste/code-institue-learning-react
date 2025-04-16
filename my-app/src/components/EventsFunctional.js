import React from "react";

const EventsFunctional = () => {
  function clickHandler() {
    console.log("Clicked the functional button!");
  }

  return (
    <div>
      <button onClick={clickHandler}>click me - functional component</button>
    </div>
  );
};

export default EventsFunctional;
