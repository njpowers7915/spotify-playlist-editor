import React, {Component} from 'react';
//import { connect } from 'react-redux';
import Login from '../components/Login';
import Signup from '../components/Signup';

class WelcomeContainer extends Component {
  //constructor(props) {
    //super(props)
    //this.state = {
    //  playlists: this.props.playlists
    //}
  //}

  render() {
    return (
      <div>
      <h1>Welcome to Spotify Playlist Editor!!</h1>
        <div>
        <Login />
        <Signup />
        </div>
      </div>
    )
  }
}

export default WelcomeContainer
