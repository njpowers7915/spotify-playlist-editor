export const createPlaylist = (text) => {
 return {
 type: ‘CREATE_PLAYLIST’,
 id: nextPlaylistId++,
 text,  //<--ES6. same as text:text, in ES5
 completed: false //<-- initially this is set to false
 }
}

export const addSongToPlaylist = (id) => {
 return {
 type: ‘ADD_SONG_TO_PLAYLIST’,
 id
 }
}

export const removeSongFromPlaylist = (id) => {
 return {
 type: ‘REMOVE_SONG_FROM_PLAYLIST’,
 id
 }
}
