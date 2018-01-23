import React, { Component } from 'react';
import './App.css'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import UserContainer from './components/UserContainer'
import EasternDetail from './components/EasternDetail'
import WesternDetail from './components/WesternDetail'
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Adapter from './adapter'

//TODO: 1. open up login form, put in name, find name in list of names in state 2. then input as prop into UserContainer -> then send that info to a MyPage container and render My info.

class App extends Component {
  constructor()
  {
    super()
    this.state = {
      users: [],
      currentUser: null,
      allEastSigns: [],
      allWestSigns: []

    }
  }
  componentDidMount()
  {
    Adapter.getUsers()
    .then(users => this.setState({
      users: users
    }))
    Adapter.getAllEastSigns()
    .then(signs =>
      this.setState({
        allEastSigns: signs
      })
    )
    Adapter.getAllWestSigns()
    .then(signs =>
      this.setState({
        allWestSigns: signs
      })
    )
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
    console.log("log in")
  }

  handleDateInput = (e) =>
  {
    this.setState({birthdate: new Date(e.target.value)});
  }
  render() {
    return (
      <div>
        <div>
          <NavBar /><br/>
        </div>

          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" render={() => <Login loginInput={this.loginInput} />}/>
            <Route exact path="/user" render={() =><UserContainer
                users={this.state.users} currentUser={this.state.currentUser}/>} />
            <Route exact path='/eastdetails' component={()=><EasternDetail allSigns={this.state.allEastSigns}/>}/>
            <Route exact path='/westdetails' component={()=><WesternDetail allSigns={this.state.allWestSigns}/>}/>

          </div>
      </div>

    )
  }
}


export default withRouter(App);

// <Route exact path="/western" render={WesternContainer} />
