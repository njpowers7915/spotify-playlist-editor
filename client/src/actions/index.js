//let counter = 0

//export function createPlaylist(playlist) {
//  playlist.id = ++counter
//  return {
//    type: 'CREATE_PLAYLIST',
//    title: '',  //<--ES6. same as text:text, in ES5
//    songs: []
// }
//}

export function createPlaylist(playlist) {
  return {
    type: 'CREATE_PLAYLIST',
    playlist
  }
}

export function fetchPlaylists() {
  const playlists = [
    {id: 1, title: 'EDM', songs: ['Song 1']},
    {id: 1, title: 'Rap Playlist', songs: ['another song']},
    {id: 1, title: 'Chill Playlist', songs: ['Awesome Song']}
  ];
  return {
    type: 'FETCH_PLAYLISTS',
    playlists
  };
}

export const deletePlaylist = (id) => {
  return {
    type: 'DELETE_PLAYLIST',
    id
  }
}

export const addSongToPlaylist = (id) => {
 return {
 type: 'ADD_SONG_TO_PLAYLIST',
 id
 }
}

export const removeSongFromPlaylist = (id) => {
 return {
 type: 'REMOVE_SONG_FROM_PLAYLIST',
 id
 }
}
