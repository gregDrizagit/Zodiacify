import React from 'react';
import {NavLink} from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '6px 6px 6px',
  // background: 'blue',
  textDecoration: 'none',
  color: 'white',
  // border: 'solid',
}

const NavBar = (props) => {
  console.log("in NAVBAR", props.currentUser);
  let loggedIn = ""
  {props.currentUser ? loggedIn = !!props.currentUser.id : ""}

  return (
    <div className="ui fixed top inverted black menu">
      <h2 className="header item">
        <div className="content">
          <p className="title">Psych</p>
        </div>
        <img src={require('../image.png')} className="image"/>
      </h2>
      <NavLink to="/"
        exact style={link}
        activeStyle={{
        'border-bottom': 'solid'
      }}>Home</NavLink>

      {loggedIn ?
        <NavLink to="/eastdetails"
          exact style={link}
          activeStyle={{
          'border-bottom': 'solid'
        }}>Chinese Zodiac</NavLink>
      :
        <a
          style={link}
          className="item">
          <div >Chinese Zodiac</div>
        </a>}

      {loggedIn ?
        <NavLink to="/westdetails"
          exact style={link}
          activeStyle={{
          'border-bottom': 'solid'
        }}>Western Astrology</NavLink>
      :
        <a style={link} className="item"><div >Western Astrology</div></a>}

      {loggedIn ?
        <div className="right menu"><a style={link}
          className="item"
          onClick={props.handleLogout}>
          <div >Log Out</div>
        </a></div>
      :
       <div className="right menu"><NavLink to="/login"
         exact style={link}
         activeStyle={{
           'border-bottom': 'solid'
      }}>Login</NavLink></div>}



      {loggedIn ? <div className="item">{`Welcome ${props.currentUser.full_name}!`}</div>
    : null}
    </div>
  )
}

export default NavBar
