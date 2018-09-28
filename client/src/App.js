import React, { Component } from 'react';
import './App.css';
import PlaylistsContainer from './components/PlaylistsContainer'

const playlists = [
  {
    title: "Chill Playlist"
  },
  {
    title: "Gym Playlist"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Spotify Playlist Editor</h1>
        </div>
        <PlaylistsContainer playlists={playlists} />
      </div>
    );
  }
}

export default App;
