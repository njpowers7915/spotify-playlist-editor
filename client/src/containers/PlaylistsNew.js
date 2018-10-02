import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPlaylist } from '../actions';

const CreatePlaylistForm = ({onSubmit}) =>
  let input
  return (
    <div>
      <form onSubmit={e => { onSubmit(input.value) }}>
        <input ref={node => {input = node}} />
        <button type="submit">Create Playlist</button>
      </form>
    </div>
  )

export default CreatePlaylistForm
