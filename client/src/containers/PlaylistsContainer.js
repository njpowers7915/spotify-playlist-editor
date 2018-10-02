import React from 'react';
import { connect } from 'react-redux';

class PlaylistsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: this.props.playlists
    }
  }

  //componentDidMount() {
  //  fetch('http://localhost:3001/api/v1/playlists.json')
  //  .then(response => {
  //    console.log(response)
  //    this.setState({playlists: response.data})
  //  })
  //  .catch(error => console.log(error))
  //}

  render() {
    return (
      <div>
        {
          this.state.playlists.map((playlist, key) => {
            return <div className="playlist" key={key}>{playlist.title}</div>
          })
        }
      </div>
    )
  }
}

export default PlaylistsContainer
