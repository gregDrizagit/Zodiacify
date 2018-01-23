import React from 'react';
import {NavLink} from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '6px 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="ui fixed top inverted green menu">
      <h2 className="header item">Psych</h2>
      <NavLink to="/" exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</NavLink>
      <NavLink to="/login" exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Login</NavLink>
      <NavLink to="/eastdetails" exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Chinese Zodiac</NavLink>
      <NavLink to="/westdetails" exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Western Astrology</NavLink>
    </div>
  )
}

export default NavBar
