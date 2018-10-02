import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <h3>Welcome user!</h3>
    <NavLink to="/" exact style={link}
      activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link}
      activeStyle={{background: 'darkblue'}}>Logout</NavLink>
  </div>;


//const NavBar = () =>
//  return (
//    <div>
//      NavBar
//    </div>
//  )

export default NavBar
