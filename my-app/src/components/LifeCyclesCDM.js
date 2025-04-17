import React, { Component } from "react";
import LifeCyclesCDMChild from "./LifeCyclesCDMChild";

export class LifeCyclesCDM extends Component {
  constructor(props) {
    console.log('Constructor Called')
    super(props)
  
    this.state = {
      data: "Loadding..."
    }
  }

  getData() {
    console.log("getData() called")
    setTimeout(()=> {
      console.log("Data Fetched!")
      this.setState({

          data: "Loadded Data!!"

        })
    }, 3000)
  }

  componentDidMount() {
    console.log("componentDidMount mounted")
    this.getData();
    
  }


  render() {
    console.log("Render called")
    return (
      <div>
        <h1>{this.state.data}</h1>
        <LifeCyclesCDMChild />
        </div>
    )
  }
}

export default LifeCyclesCDM;
