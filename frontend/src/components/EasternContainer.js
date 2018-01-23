import React from 'react'
import EasternList from './EasternList'
import Adapter from '../adapter'
import CompatibilityList from './CompatibilityList'

class EasternContainer extends React.Component{


  // componentDidMount()
  // {
  //   this.setState({currentUser: this.props.currentUser, users: this.props.users })
  // }

  showCompatibleUsers = (currentUser, users) =>
  {
    //if user.eastern.sign is contained in currentUser.eastern_partners
      //collect that users
    const compatibleUsers = []
    currentUser.eastern.eastern_partners.forEach(partner => {
      users.forEach(user => {
        if(user.eastern)
        {
          if(user.eastern.sign === partner.sign)
          {
            compatibleUsers.push(user)
          }
        }
      })
    })

    console.log("compatible users", compatibleUsers)

     return compatibleUsers
  }

  render() {

    console.log("GRANDCHILD eastern partners state", this.props.currentUser)
     this.showCompatibleUsers(this.props.currentUser, this.props.users)
    return(
      <div>
        <h1>Eastern Container </h1>
        {
          this.props.currentUser && this.props.users ?
          <div>

            <h1>{this.props.currentUser.eastern.sign}</h1>
            <p>{this.props.currentUser.eastern.lucky_color}</p> -
            <p>{this.props.currentUser.eastern.lucky_number}</p> -
            <p>{this.props.currentUser.eastern.description}</p> -
            <CompatibilityList users={this.showCompatibleUsers(this.props.currentUser, this.props.users)} />
          </div>
            :
            <p>Loading</p>
        }
      </div>
    )
  }
}
export default EasternContainer
