import React, { Component } from 'react';
import WesternContainer from './components/WesternContainer'
import EasternContainer from './components/EasternContainer'
import Login from './components/Login'
import UserContainer from './components/UserContainer'
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Adapter from './adapter'

//TODO: 1. open up login form, put in name, find name in list of names in state 2. then input as prop into UserContainer -> then send that info to a MyPage container and render My info.

class App extends Component {
  constructor()
  {
    super()
    this.state = {
      users: [],
      allEast: [],
      currentUser: ""
    }
  }
  componentDidMount()
  {
    Adapter.fetchEastSigns()
    .then(signs => this.setState({
      allEast: signs
    }))
    Adapter.getUsers()
    .then(users => this.setState({
      users: users
    }))
  }

  loginInput = (e) =>
  {
    e.preventDefault()
    const user = this.state.users.find(user => user.full_name.toLowerCase().includes(e.target[0].value.toLowerCase()))
    if (user) {

      this.setState({
        currentUser: user
      }, this.props.history.push("user"))
    } else {

      alert("Not a valid user!")
    }

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
            <Route exact path="/user" render={() => <UserContainer users={this.state.users} currentUser={this.state.currentUser}
              allEast={this.state.allEast}/>} />

          </div>
      </div>

    )
  }
}


export default withRouter(App);

// <Route exact path="/western" render={WesternContainer} />
