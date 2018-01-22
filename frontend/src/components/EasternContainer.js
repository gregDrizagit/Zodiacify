import React from 'react'
import EasternList from './EasternList'
import Adapter from '../adapter'
import CompatibilityForm from './CompatibilityForm'

class EasternContainer extends React.Component{

  constructor(props)
  {
    super(props)
    this.state = {
      currentUser: this.props.currentUser,
      users: this.props.users
    }
  }

  // componentDidMount()
  // {
  //   this.setState({currentUser: this.props.currentUser, users: this.props.users })
  // }

  showCompatibleUsers = (currentUser, users) =>
  {
    //if user.eastern.sign is contained in currentUser.eastern_partners
      //collect that users

    const compatibleUsers = []
    // currentUser.eastern.eastern_partners.forEach(partner => {
    //   users.forEach(user => {
    //     console.log("user sign", user)
    //     console.log("partner sign", partner)
    //
    //     if(user.eastern.sign === partner.sign)
    //     {
    //       compatibleUsers.push(user)
    //     }
    //   })
    // })
    console.log(currentUser)

    return compatibleUsers
  }

  render() {

    console.log("GRANDCHILD eastern partners state", this.state.currentUser)

    return(
      <div>
        <h1>Eastern Container </h1>
        {
          this.state.currentUser && this.state.users ?
          <div>
            {this.showCompatibleUsers(this.state.currentUser, this.state.users)}

            <h1>{this.state.currentUser.eastern.sign}</h1>
            <p>{this.state.currentUser.eastern.lucky_color}</p> -
            <p>{this.state.currentUser.eastern.lucky_number}</p> -
            <p>{this.state.currentUser.eastern.description}</p> -

          </div>
            :
            <p>Loading</p>
        }
      </div>
    )
  }
}
export default EasternContainer
