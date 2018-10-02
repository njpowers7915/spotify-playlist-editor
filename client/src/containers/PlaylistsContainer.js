import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PlaylistList from '../components/PlaylistList';
import PlaylistShow from './PlaylistShow';

const PlaylistsContainer = ({ match, playlists }) =>
  <div>
    <PlaylistList playlists={playlists} />
    <Route path={`${match.url}/:playlistId`} component={PlaylistShow} />
    <Route exact path={match.url} render={() => (
      <h3>Select a Playlist from the list</h3>
    )}
  </div>;

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists
  };
}


//class PlaylistsContainer extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      playlists: this.props.playlists
//    }
//  }

  //componentDidMount() {
  //  fetch('http://localhost:3001/api/v1/playlists.json')
  //  .then(response => {
  //    console.log(response)
  //    this.setState({playlists: response.data})
  //  })
  //  .catch(error => console.log(error))
  //}

export default connect(mapStateToProps)(PlaylistsContainer);
