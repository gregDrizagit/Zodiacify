import React from 'react'
import EasternList from './EasternList'
import Adapter from '../adapter'


class EasternContainer extends React.Component{

  constructor(props)
  {
    super(props)
    this.state = {
      partners:[],
      clicked: false
    }
  }
  //
  // eastSign = () => {
  //   const sign = this.props.allEast.find(sign => sign.sign === this.props.eastern
  //   )
  //   return sign
  //
  // }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let description = ""
    if (this.state.clicked) {
      description = <div>
        <img src={this.props.currentUser.eastern.img_url} />
    <p>{this.props.currentUser.eastern.description}</p> -
    <p>Lucky Colors: {this.props.currentUser.eastern.lucky_color} </p> -
    <p>Lucky Numbers: {this.props.currentUser.eastern.lucky_number} </p>
    <EasternList
      users={this.props.users} partners={this.props.currentUser.eastern.eastern_partners} />

    </div>
    }
    console.log("GRANDCHILD eastern partners state", this.props.currentUser, this.props.users)
    return(
      <div>
        {  !this.props.currentUser.eastern ? "Loading..." :
          <div>
            <h2 onClick={this.handleClick}>{this.props.currentUser.eastern.sign}</h2>
            {description}
          </div>
        }
      </div>
    )
  }
}
export default EasternContainer
