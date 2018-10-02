import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import PlaylistsContainer from './PlaylistsContainer'
import CreatePlaylistForm from '../components/CreatePlaylistForm'

class HomeContainer extends Component {
  constructor(props) {
    //super(props)
    //this.state = {
    //  playlists: this.props.playlists
    //}
  }

  render() {
    return (
      <div>
        <NavBar />
        <CreatePlaylistForm />
        <PlaylistsContainer />
      </div>
    )
  }
}

export default HomeContainer
