import React, { Component } from 'react';
import DropdownWrapper from './components/DropdownWrapper/DropdownWrapper';
import CardWrapper from './components/CardWrapper/CardWrapper'

const APIKey = "a60e9faf7fmshc23154d0472737cp1baaf5jsna13ea55c29e8";

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "Shooter",
      platform: "PC",
      gamesData: []
    };
    
  }

  // Fetching first 10 results from the api
  componentDidMount() {
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": APIKey,
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            gamesData: result
          }, console.log(result));
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  handleChange = (type, event) => {
    const state = "category" === type;
    return state ? this.setState({category: event.target.value}) : this.setState({platform: event.target.value});
  }

  render() {
    const {category, platform, gamesData} = this.state;
    const filterGames = gamesData.filter( games => {
      return games.genre.includes(category) && games.platform.includes(platform);
    });

    return (
      <div>
        <h1>Top 10 {this.state.category} Games for {this.state.platform}</h1>
        <DropdownWrapper handleChange={this.handleChange}></DropdownWrapper>
        <CardWrapper gamesData={filterGames.slice(0, 10)}></CardWrapper>
      </div>
    );
  }
}

export default App;
