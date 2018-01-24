import React from 'react';
import {NavLink} from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '6px 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  border: 'dotted',
}

const NavBar = (props) => {
  console.log("in NAVBAR", props.currentUser);
  let loggedIn = ""
  {props.currentUser ? loggedIn = !!props.currentUser.id : ""}

  return (
    <div className="ui fixed top inverted red menu">
      <h2 className="header item">
        <div className="content"><p className="title">Psych</p></div>
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/138962-200.png' className="image"/>
      </h2>
      <NavLink to="/" exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</NavLink>

      {loggedIn ?
        <a style={link} className="item" onClick={props.handleLogout}><div >Log Out</div></a>

      :
       <NavLink to="/login" exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Login</NavLink> }

      {loggedIn ?
        <NavLink to="/eastdetails" exact style={link} activeStyle={{
          background: 'darkblue'
        }}>Chinese Zodiac</NavLink>

      :
        <a style={link} className="item"><div >Chinese Zodiac</div></a>}

      {loggedIn ?
        <NavLink to="/westdetails" exact style={link} activeStyle={{
          background: 'darkblue'
        }}>Western Astrology</NavLink>

      :
        <a style={link} className="item"><div >Western Astrology</div></a>}

      {loggedIn ? <div className="item">{`Welcome ${props.currentUser.full_name}!`}</div>
    : null}
    </div>
  )
}

export default NavBar
