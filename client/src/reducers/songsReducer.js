const initialState = {
  songs: []
}

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG_TO_PLAYLIST':
      return [...state, {id: action.id, name: action.name,
        artist: action.artist, genre: action.genre}]

    case 'REMOVE_SONG_FROM_PLAYLIST':
      const removalIndex = state.songs.findIndex(song =>
       song.id === action.id)
      return (
        {...state,
          songs: [
            ...state.songs.slice(0, removalIndex),
            ...state.songs.slice(removalIndex + 1)
          ]}
      )

     default:
      return state
    }
}

export default songsReducer;
