import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import './App.css';
import WelcomeContainer from './WelcomeContainer'
import HomeContainer from './HomeContainer'
import PlaylistsShow from './PlaylistsShow'

//const playlists = [{title: "Chill Playlist"}, {title: "Gym Playlist"}]
const App = (props) =>
  <div className="App">
    <Router>
      <React.Fragment>
        <Route exact path="/" component={WelcomeContainer} />
        <Route exact path="/playlists" component={HomeContainer} />
        <Route exact path="/playlists/:playlistid" component={PlaylistsShow} />
        </React.Fragment>
    </Router>
  </div>

//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <div className="App-header">
//          <h1>Welcome to Spotify Playlist Editor</h1>
//        </div>
//        <PlaylistsContainer playlists={playlists} />
//      </div>
//    );
//  }
//}

export default App;
