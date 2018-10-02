import React from 'react';
import { connect } from 'react-redux';
import PlaylistList from '../components/PlaylistList';

const PlaylistsContainer = ({ playlists }) =>
  <div>
    <PlaylistList playlists={playlists} />
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
