import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import SongsContainer from './SongsContainer'
import SearchSongForm from '../components/SearchSongForm'


class PlaylistsShow extends Component {
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
        <SearchSongForm />
        <SongsContainer />
      </div>
    )
  }
}

export default PlaylistsShow
