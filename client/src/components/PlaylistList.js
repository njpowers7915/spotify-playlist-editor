import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const playlists = props.playlists.map(playlist =>
    <li key={playlist.id}>
      <Link to={`/playlists/${playlist.id}`}>
        {playlist.title}
      </Link>
    </li>
  )

  return (
    <div>
      <div className='playlists'>
        <ul>
          {playlists}
        </ul>
      </div>
    </div>
  )
}

export default PlaylistList;
