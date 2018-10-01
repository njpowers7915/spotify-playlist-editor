import React from 'react'

const Song = ({
  title,
  artist,
  genre,
}) => {
  return (
    <div key={title} className = "song">{title} - {artist} - {genre}</div>
  )
}

const Songs = ({songs}) =>
  <div className="song-list">{songs.map(Song)}</div>

  Songs.defaultProps = {
    songs: []
  }

export default Songs
