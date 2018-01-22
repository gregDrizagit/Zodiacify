import React from 'react'
import EasternContainer from "./EasternContainer"
import WesternContainer from "./WesternContainer"
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compatability: ""
    }
  }

  render(){
    console.log('CHILD in my page', this.props.currentUser)
    return(
      <div>
        {
          this.props.users.length === 0 ? "Loading" :
          <div>
            <h1>{this.props.currentUser.full_name}</h1>
              <label>My Chinese Zodiac Info:</label>
              <EasternContainer
                users={this.props.users}
                currentUser={this.props.currentUser}
                allEast={this.props.allEast} eastern={this.props.eastern} />
              <label>My Western Astrology Info:</label>
              <WesternContainer western={this.props.western} />
          </div>
        }
      </div>
    )
  }
}

export default MyPage
