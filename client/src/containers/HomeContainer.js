import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchPlaylists } from '../actions'
//import { connect } from 'react-redux';
import NavBar from './NavBar'
import PlaylistsContainer from './PlaylistsContainer'
import PlaylistsNew from './PlaylistsNew'
import PlaylistList from './components/PlaylistList'

class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { match, playlists } = this.props;

    return (
      <div>
        <PlaylistList playlists={playlists} />
        <Switch>
          <Route path={`${match.url}/new`} component={PlaylistsNew} />
          <Route path={`${match.url}/:playlistId`} component={PlaylistsShow}/>
          <Route exact path={match.url} render={() => (
            <h3>Select a Playlist.</h3>
          )}/>
        </Switch>
      </div>
    )
  }
  const mapStateToProps = state => {
    return {
      playlists: state.playlists
    };
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(HomeContainer);
