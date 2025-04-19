import React, { Component } from 'react';
import importNames from '../names';

export class SearchBar extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
         names: importNames
      }
    }
handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    console.log(inputText)
    const filteredNames = importNames.filter((name)=> {
        return name.toLowerCase().includes(inputText)
    })

    this.setState(
        {
            names: filteredNames
        }
    )
}

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p style={{fontWeight: "bold"}}>Matching names found: {this.state.names.length}</p>
        <form>
            <input onChange={(event) => this.handleChange(event)} style={{padding: "5px", margin:"5px"}} type="text" placeholder="Search for a name..." />
        </form>
        <div style={{margin: "auto", border: "1px solid red", width: "500px", padding: "1em"}}>
            We will render names here
            {this.state.names.map((name) => {
                  return (
                    <p key={name}>{name}</p>
                  )
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar;






