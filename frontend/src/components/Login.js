import React from 'react'
import Adapter from '../adapter'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      fields: {
        full_name: "",
        password: ""
      }
    }
  }

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const user = this.props.users.find(user => user.full_name.toLowerCase().includes(this.state.fields.full_name.toLowerCase()))
    if (user) {
      console.log("in submit", user);
      Adapter.postToAuth(user.full_name, this.state.fields.password)
      .then(user => this.props.users.find(x => x.full_name === user.full_name)).then(user => this.props.loginInput(user))
    } else {
      alert("Not a valid user!")
    }
    console.log("log in")

  }

  render() {
    const { fields } = this.state;
    return(
      <div >
        <form onSubmit={this.handleSubmit}>
          <div className="ui field">
            <input type="text"
              name="full_name"
              value={fields.full_name}
              placeholder="Full Name"
              onChange={this.handleChange} />
          </div>
          <div className="ui field">
            <input
              type="password"
              name="password"
              value={fields.password}
              onChange={this.handleChange}
              placeholder="Password" />
          </div>
          <button className="ui blue button" type="submit">Login</button>
        </form>

      </div>
    )
  }

}

export default Login
