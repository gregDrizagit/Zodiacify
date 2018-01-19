import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = (props) =>
{
  return(
    <div>
      <form onSubmit={props.loginInput}>
        <input type="text" placeholder="Full Name" />
        <button type="submit">Login</button>
      </form>

      <form onSubmit={props.signUpInput}>
        <input type="text" placeholder="Full Name" />
        <input id="date" type="date" />
        <button type="submit">Join</button>
      </form>
    </div>
  )
}
export default Login
