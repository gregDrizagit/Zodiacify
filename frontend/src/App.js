import React, { Component } from 'react';
import getUsers from './adapter';
import WesternContainer from './components/WesternContainer'
import EasternContainer from './components/EasternContainer'
import Login from './components/Login'
import SignupForm from './components/SignupForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// <Route exact path="/login" component={Login} />

class App extends Component {
  constructor()
  {
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount()
  {
    const users = getUsers()
    this.setState({users: users})
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" render={() => <h1>Welcome to Zodiacify</h1> }/>
            <Route exact path="/eastern" render={() => <EasternContainer />} />
            <Route exact path="/western" component={WesternContainer} />
          </div>
        </Router>
      </div>

    )
  }
}

export default App;
