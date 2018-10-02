import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import SongsContainer from './SongsContainer'
import SearchSongForm from '../components/SearchSongForm'


class PlaylistsShow = props => {
  return (
    <div>
      <NavBar />
      <h3>{playlist.title}</h3>
      <SearchSongForm />
      <SongsContainer />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const playlist = state.playlists.find(playlist => playlist.id ==
    ownProps.match.params.playlistId)

  if (playlist) {
    return { playlist }
  } else {
    return { playlist: {} }
  }
}

export default connect(mapStateToProps)(PlaylistShow);
