import React, {Component} from 'react';
//import { connect } from 'react-redux';
import NavBar from './NavBar'
import PlaylistsContainer from './PlaylistsContainer'
import PlaylistsNew from './PlaylistsNew'

class HomeContainer extends Component {
  //constructor(props) {
    //super(props)
    //this.state = {
    //  playlists: this.props.playlists
    //}
  //}

  render() {
    return (
      <div>
        <NavBar />
        <PlaylistsNew />
        <PlaylistsContainer />
      </div>
    )
  }
}

export default HomeContainer
