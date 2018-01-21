import React from 'react'
import EasternContainer from "./EasternContainer"
import WesternContainer from "./WesternContainer"
class MyPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        {
          this.props.users.length === 0 ? "Loading" :
          <div>
            <h1>{this.props.users[0].full_name}</h1> - Eastern Zodiac Sign:
             <EasternContainer eastern={this.props.users[0].eastern} />
             <WesternContainer western={this.props.users[0].western} />
          </div>
        }
      </div>
    )
  }
}

export default MyPage
