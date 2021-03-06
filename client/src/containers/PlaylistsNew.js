import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../actions';

class PlaylistsNew extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      songs: []
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createPlaylist, history } = this.props
    let newPlaylist = createPlaylist(this.state)
    history.push(`/plalylists/${newPlaylist.id}`)
  }

  handleOnChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input type="text"
          onChange={this.handleOnChange}
          placeholder="Create Playlist" />
        <button type="submit">Create Playlist</button>
      </form>
    )
  }
}

export default connect(null, { createPlaylist })(PlaylistsNew)
