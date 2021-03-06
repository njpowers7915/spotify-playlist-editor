import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistList = ({ playlists }) => {
  const renderPlaylists = playlists.map(playlist =>
    <Link style={{ marginRight: '12px' }} key={playlist.id}
      to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
  );

  return (
    <div>
      {renderPlaylists}
    </div>
  )
}

export default PlaylistList
