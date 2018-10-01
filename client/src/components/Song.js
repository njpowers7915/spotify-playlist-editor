import React from 'react'

const Song = ({ name, artist, genre }) => {
  return (
    <div key={name} className = "song">
      <li>{name} - {artist} - {genre}</li>
    </div>
  )
}

const Songs = ({songs}) =>
  <div className="song-list">{songs.map(Song)}</div>

  Songs.defaultProps = {
    songs: []
  }

export default Songs
