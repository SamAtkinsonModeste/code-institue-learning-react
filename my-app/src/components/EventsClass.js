import React from "react";

export class EventsClass extends React.Component {
  clickHandler() {
    console.log("Clicked the class button!");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me - class component</button>
      </div>
    );
  }
}

export default EventsClass;
