import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
        catergory: "website",
        comments: ""

      }
    }

handleChange = (event) => {
  const { name, value } = event.target;
  console.log(`This is the value of ${name}:`, event.target.value)
  this.setState({
    [name]: value

  })
} 
  
handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state)
}

  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
         <label htmlFor="id-name">Your Name:</label>
         <input  
            value={this.state.name} 
            onChange={this.handleChange}
            id="id-name" name="name" type="text"
             />
             </div>
             <div>
          <label htmlFor="id-name">Query Category:</label>
          <select value = {this.state.catergory} onClick={this.handleChange} id="id-catergory" name="catergory" type="text">
            <option value="website">Website Issues</option>
            <option value="order">Order Issues</option>
            <option value="general">General Issues</option>
          </select>
          </div>
          <div>
          <label htmlFor="id-comments">Comments:</label>
          <textarea value = {this.state.comments} onChange={this.handleChange} id="id-comments" name="comments" />
          </div>
         
         <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ControlledForm;


