import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Spotify Playlist Editor</h1>
        </div>
        <PlaylistsContainer />
      </div>
    );
  }
}

export default App;
