import React, { Component } from 'react';
import WesternContainer from './components/WesternContainer'
import EasternContainer from './components/EasternContainer'
import Login from './components/Login'
import SignupForm from './components/SignupForm'
import UserContainer from './components/UserContainer'
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';

// <Route exact path="/login" component={Login} />

class App extends Component {
  constructor()
  {
    super()
    this.state = {
      // users: [],
      fullName:"",
      birthdate: null
    }
  }
  componentDidMount() {

  }

  loginInput = (e) =>
  {
    e.preventDefault()
    this.setState({fullName: e.target.children[0].value, birthdate: new Date(e.target.children[1].value)}, this.props.history.push("user"));
  }
  handleDateInput = (e) =>
  {
    this.setState({birthdate: new Date(e.target.value)});
  }
  render() {
    return (
      <div>
          <div>
            <Route exact path="/" render={() => <Login loginInput={this.loginInput} />}/>
            <Route exact path="/user" render={() => <UserContainer name={this.state.fullName} date={this.state.birthdate}/>} />
            // <Route exact path="/western" render={WesternContainer} />

          </div>
      </div>

    )
  }
}

// name={this.state.fullName} birthdate={this.state.birthdate}

export default withRouter(App);
