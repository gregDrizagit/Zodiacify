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
      <div className='ui middle aligned center aligned'>
        <div className="column">
          <h2 className="ui image header">
            <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/138962-200.png' className="image"/>
            <div className="content">Login for Guidance</div></h2>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <div className="ui field">
                <div className="ui left icon input">
                  <i className="user icon"/>
                  <input type="text"
                    name="full_name"
                    value={fields.full_name}
                    placeholder="Full Name"
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="ui field">
                <div className="ui left icon input">
                  <i className="lock icon"/>
                  <input
                    type="password"
                    name="password"
                    value={fields.password}
                    onChange={this.handleChange}
                    placeholder="Password" />
                </div>
              </div>
              <button className="ui blue button" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Login
