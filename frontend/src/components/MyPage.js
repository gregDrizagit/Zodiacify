import React from 'react'
import EasternContainer from "./EasternContainer"
import WesternContainer from "./WesternContainer"
class MyPage extends React.Component {



  render(){
    console.log('CHILD in my page', this.props.currentUser)
    return(
      <div>
        {
          this.props.users.length === 0 ? "Loading..." :
          <div>
            <h1>{this.props.currentUser.full_name}</h1>
              <h2>Chinese Zodiac</h2>
              <EasternContainer
                renderPartner={this.props.renderPartner}
                users={this.props.users}
                currentUser={this.props.currentUser}
              />
            <h2>Western Astrology</h2>
              <WesternContainer currentUser={this.props.currentUser} />
          </div>
        }
      </div>
    )
  }
}

export default MyPage
