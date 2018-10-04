const initialState = {
  playlists: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLAYLISTS':
      return action.playlists;

    case 'CREATE_PLAYLIST':
      const playlist = Object.assign({}, action.playlist, {id: state.length + 1});
      return [...state, playlist ];
      
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
