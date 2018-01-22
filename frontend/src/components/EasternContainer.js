import React from 'react'
import EasternList from './EasternList'
import Adapter from '../adapter'
import CompatibilityForm from './CompatibilityForm'

class EasternContainer extends React.Component{

  constructor(props)
  {
    super(props)
    this.state = {
      allSigns: props.allEast,
      partners:[],
      clicked: false
    }
  }

  eastSign = () => {
    const sign = this.state.allSigns.find(sign => sign.sign === this.props.eastern
    )
    return sign

  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let description = ""
    if (this.state.clicked) {
      description = <div>
        <img src={this.eastSign().img_url} />
    <p>{this.eastSign().description}</p> -
    <p>Lucky Colors: {this.eastSign().lucky_color} </p> -
    <p>Lucky Numbers: {this.eastSign().lucky_number} </p>
    <EasternList
      users={this.props.users} partners={this.eastSign().eastern_partners} />

    </div>
    }
    console.log("GRANDCHILD eastern partners state", this.props.users)
    return(
      <div>
        <h2 onClick={this.handleClick}>{this.eastSign().sign}</h2>
          {description}

      </div>
    )
  }
}
export default EasternContainer
