import React, { Component } from 'react'

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
