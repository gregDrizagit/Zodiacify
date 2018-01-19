import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = (props) =>
{
  return(
    <div>
      <form onSubmit={props.name}>
        <input type="text" placeholder="Full Name" />
        <input id="date" type="date" />
        <button type="submit">Join</button>
      </form>
    </div>
  )
}
export default Login
