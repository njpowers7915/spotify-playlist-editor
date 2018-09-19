import React, { Component } from 'react'

class PlaylistsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/playlists.json')
    .then(response => {
      console.log(response)
      this.setState({playlists: response.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        Playlists
      </div>
    )
  }
}

export default PlaylistsContainer
