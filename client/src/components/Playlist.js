import React from 'react'

const Playlist = ({
  title,
  songs
}) => {
  return (
    <div key={title} className = "playlist">
      <h2>{title}</h2>
      <div className="song-list">
        {songs.map(song => <Song
          name={song.name}
          artist={song.artist}
          genre={song.genre}
          />)}
      </div>
    </div>
  )
}

export default Playlist
