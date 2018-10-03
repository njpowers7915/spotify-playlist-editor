import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PlaylistList from '../components/PlaylistList';
import PlaylistsShow from './PlaylistsShow';
import PlaylistsNew from './PlaylistsNew';

const PlaylistsContainer = ({ match, playlists }) =>
  <div>
    <PlaylistList playlists={playlists} />
      <Switch>
        <Route path={`${match.url}/new`} component={PlaylistsNew} />
        <Route path={`${match.url}/:playlistId`} component={PlaylistsShow} />
        <Route exact path={match.url} render={() => (
          <h3>Select a Playlist from the list</h3>
        )} />
      </Switch>
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
