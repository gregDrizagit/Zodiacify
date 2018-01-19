import React from 'react'
// import getUsers from './adapter';

class UserContainer extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      fullName: "",
      birthdate: null
    }

  }
  // componentDidMount() {
  //   fetch("http://localhost:3001/users")
  //   .then(res => res.json())
  //   .then(json => this.setState({
  //     fullName: json.fullName,
  //     birthdate: json.birthdate
  //   }, () => console.log(this.state))
  //   )
  // }

  render()
  {

    return(
      <div>
        {<h1>Welcome {this.props.name} - {this.props.date.toString()}</h1>}
      </div>
    )
  }
}
export default UserContainer
