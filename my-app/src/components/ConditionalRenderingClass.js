import React, { Component } from "react";

export class ConditionalRenderingClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      isLoggedIn: false
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "Data Loaded!" : "Loading....."}</h1>
        {this.state.isLoggedIn ? (
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
  }
}

export default ConditionalRenderingClass;
