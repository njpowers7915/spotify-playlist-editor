const managePlaylists = (state, action) => {
  switch (action.type) {
    case 'CREATE_PLAYLIST':
      return […state,{id: action.id, title: action.title, songs: action.songs
              completed:false}]

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
