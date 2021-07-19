// import DropdownWrapper from './components/DropdownWrapper/dropdownWrapper.component';

import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "Shooter",
      platform: "PC"
    };
  }

  handleChange = (type, event) => {
    const state = "category" === type;
    if (state){
      this.setState({category: event.target.value});
    } else {
      this.setState({platform: event.target.value});
    }
    
  }

  

  render() {
    const categorySelection = ["Shooter", "MMO", "MMORPG", "Strategy", "Moba"];
    const platformSelection = ["PC", "Browser"];

    const renderItem = (items) => {
      return items.map((item) => {
        return (
          <option value={item}>{item}</option>
        )
      })
    }
    return (
      <div>
        <h1>Top 10 {this.state.category} Games for {this.state.platform}</h1>
        <select onChange={event => this.handleChange("category", event)} >
          {renderItem(categorySelection)}
        </select>
        <select onChange={event => this.handleChange("platform", event)}>
          {renderItem(platformSelection)}
        </select>
    </div>
    );
  }
}

export default App;
