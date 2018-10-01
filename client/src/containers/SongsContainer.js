import React, { Component } from 'react'

class SongsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: this.props.songs
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/songs.json')
    .then(response => {
      console.log(response)
      this.setState({playlists: song.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {
          this.state.songs.map((song, key) => {
            return <div className="song" key={key}>{song.name}</div>
          })
        }
      </div>
    )
  }
}

export default SongsContainer
