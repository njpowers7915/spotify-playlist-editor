import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { connect } from 'react-redux';
import NavBar from './NavBar'
import PlaylistsContainer from './PlaylistsContainer'
import PlaylistsNew from './PlaylistsNew'

const HomeContainer = (props) =>
  <div className="home-container">
    <Router>
      <React.Fragment>
        <Route path="/playlists" component={NavBar} />
        <Route exact path="/playlists" component={PlaylistsNew} />
        <Route path="/playlists" component={PlaylistsContainer} />
      </React.Fragment>
    </Router>
  </div>


export default HomeContainer
