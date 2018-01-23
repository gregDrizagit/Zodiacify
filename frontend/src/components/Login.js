import React from 'react'

const Login = (props) =>
{
  return(
    <div >
      <form onSubmit={props.loginInput}>
        <input type="text" placeholder="Full Name" />
        <button className="ui blue button" type="submit">Login</button>
      </form>

    </div>
  )
}
export default Login
