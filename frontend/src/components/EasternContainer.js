import React from 'react'
import EasternList from './EasternList'
import Adapter from '../adapter'
import CompatibilityList from './CompatibilityList'

class EasternContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  showCompatibleUsers = (currentUser, users) => {
    const compatibleUsers = []
    currentUser.eastern.eastern_partners.forEach(partner => {
      users.forEach(user => {
        if(user.eastern) {
          if(user.eastern.sign === partner.sign) {
            console.log("user:", user.eastern.sign)
            console.log("partner:", partner.sign)
            compatibleUsers.push(user)
          }
        }
      })
    })
    console.log("compatible users", compatibleUsers)
     return compatibleUsers
  }

  handleClick = () => (
    this.setState({
      clicked: !this.state.clicked
    })
  )

  render() {
    console.log("GRANDCHILD eastern partners state", this.props.currentUser)

    const front = (
      <div className="ui card" onClick={this.handleClick}>
        <a class="image" href="#">
          <img src={this.props.currentUser.eastern.img_url}/>
        </a>
        <div className="content">
          <a className="meta" href="#">Lucky Colors: {this.props.currentUser.eastern.lucky_color}</a>
        <div className="meta">
          <a className="header">Lucky Numbers: {this.props.currentUser.eastern.lucky_number}</a>
        </div>
        </div>
      </div>)

    const back = (
      <div className="ui card" onClick={this.handleClick}>
        <div className="content">
          <div className="header">Compatible Signs:</div>
          <div className="description">
            <ul>{this.props.currentUser.eastern.eastern_partners.map(partner =>{ return <dl>{partner.sign}</dl>})}
            </ul>
            <CompatibilityList
              renderPartner={this.props.renderPartner}
              users={this.showCompatibleUsers(this.props.currentUser, this.props.users)} />
          </div>
          <div className="description">
            <p>{this.props.currentUser.eastern.description}</p>
          </div>
        </div>
      </div>
    )

    return(
      <div>
        { this.props.currentUser && this.props.users ?
          <div>
            {this.state.clicked ? back : front}
          </div>
            :
            <p>Loading</p>
        }
      </div>
    )
  }
}

export default EasternContainer
