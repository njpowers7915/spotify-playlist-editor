import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import SongsContainer from './SongsContainer'
import SearchSongForm from '../components/SearchSongForm'


class PlaylistsShow = props => {
  return (
    <div>
      Playlist Show Component
    </div>
  )
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
