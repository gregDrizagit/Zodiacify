import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import './App.css'
import Adapter from './adapter'
import EasternDetail from './components/EasternDetail'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import UserContainer from './components/UserContainer'
import WesternDetail from './components/WesternDetail'

class App extends Component {
  constructor() {
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
    // debugger
    const token = localStorage.getItem('token')
    token ? Adapter.getCurrentUserAuth().then(user=>this.setState({
      currentUser: user
    })) : null
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

  loginInput = (user) => {
    localStorage.setItem('token', user.id)
    this.setState({
      currentUser: user
    }, ()=>this.props.history.push("user"))
  }

  handleDateInput = (e) => {
    this.setState({birthdate: new Date(e.target.value)});
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      currentUser: null
    }, ()=>this.props.history.push("login"))
  }

  updateUser = (currentUser, east, west) => {
    Adapter.patchSignsToUser(currentUser, east, west).then(user => this.setState({currentUser: user}))
  }

  render() {
    return (
      <div>
        <div>
          <NavBar
            currentUser={this.state.currentUser} handleLogout={this.handleLogout}/><br/>
        </div>

          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" render={() =>
                <Login
                  loginInput={this.loginInput}
                  users={this.state.users} />}/>
            <Route exact path="/user" render={() =>
                <UserContainer
                users={this.state.users} currentUser={this.state.currentUser}
                updateUser={this.updateUser}/>}/>
            <Route exact path='/eastdetails' component={()=>
                <EasternDetail allSigns={this.state.allEastSigns}/>}/>
            <Route exact path='/westdetails' component={()=>
                <WesternDetail allSigns={this.state.allWestSigns}/>}/>
          </div>
      </div>
    )
  }
}

export default withRouter(App);

// <Route exact path="/western" render={WesternContainer} />
