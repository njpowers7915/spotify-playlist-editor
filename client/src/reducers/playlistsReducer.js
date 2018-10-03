const initialState = {
  playlists: []
}

const playlistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLAYLIST':
      return [...state, {id: action.id, title: action.title, songs: action.songs}]

    case 'DELETE_PLAYLIST':
      const removalIndex = state.playlists.findIndex(playlist =>
       playlist.id === action.id)
      return (
        {...state,
          playlists: [
            ...state.playlists.slice(0, removalIndex),
            ...state.playlists.slice(removalIndex + 1)
          ]}
      )

     default:
      return state
    }
}

export default playlistsReducer;
