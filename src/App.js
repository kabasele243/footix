import React from 'react';
import './App.css';
import { MatchesList } from './components/matches-list/matches-list.component';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      matches: [],
    }
  }
  
  componentDidMount(){
   fetch('https://www.scorebat.com/video-api/v3/')
    .then(response => response.json())
    .then(match => this.setState({ matches: match.response}))
  
  }

//   "title": "Palestino - Union La Calera",
// "competition": "CHILE: Primera Division",
// "matchviewUrl": "https://www.scorebat.com/embed/matchview/1081510/",
// "competitionUrl": "https://www.scorebat.com/embed/competition/chile-primera-division/",
// "thumbnail": "https://www.scorebat.com/og/m/og1081510.jpeg",
// "date": "2021-11-04T18:30:00+0000",
// "videos": [
// {
// "title": "Highlights",
// "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/61844d605af96/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
// }
// ]
// },

  render() {
  return (
    <div className="App">
        <MatchesList>
        {
        this.state.matches.map( match => 
          <div className="match-card">
            <h2 key={match.key}>{match.title}</h2>
            <h3>{match.competition}</h3>
            <img alt={match.title} src={match.thumbnail}/>
          </div>
        )
        }
        </MatchesList>
    </div>
  );
  }
}

export default App;
