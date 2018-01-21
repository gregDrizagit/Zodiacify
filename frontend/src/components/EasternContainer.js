import React from 'react'
import EasternList from './EasternList'
class EasternContainer extends React.Component{

  constructor(props)
  {
    super(props)
    this.state = {
    }
  }

  render()
  {
    
    debugger
    return(
      <div>
        <h2>{this.props.eastern.sign}</h2> -
        <p>{this.props.eastern.description}</p> -
        <p>Lucky Color:{this.props.eastern.lucky_color} </p> -
        <p>Lucky Number:{this.props.eastern.lucky_number} </p>
        <img src={this.props.eastern.img_url} />
        <EasternList compatibilities={this.props.eastern.eastern_partners} />
      </div>
    )
  }
}
export default EasternContainer
