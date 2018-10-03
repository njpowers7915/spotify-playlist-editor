import { combineReducers } from 'redux';
import playlistsReducer from './playlistsReducer';
import songsReducer from './songsReducer';

const rootReducer = combineReducers({
  playlists: playlistsReducer,
  songs: songsReducer
})

export default rootReducer;
