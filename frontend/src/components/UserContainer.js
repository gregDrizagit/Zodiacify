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
  componentDidMount()
  {
    this.setState({fullName: this.props.name, birthdate: this.props.date})

  }
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
