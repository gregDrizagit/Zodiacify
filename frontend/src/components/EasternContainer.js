import React from 'react'
import EasternList from './EasternList'
import Adapter from '../adapter'

class EasternContainer extends React.Component{

  constructor(props)
  {
    super(props)
    this.state = {
      partners:[]
    }
  }
  componentDidMount()
  {
    Adapter.getEasternPartners(this.props.eastern.id).then(partners => this.setState({partners: partners.eastern_partners}))
  }

  render()
  {
    console.log("eastern partners state", this.state.partners)
    return(
      <div>
        <h2>{this.props.eastern.sign}</h2> -
        <p>{this.props.eastern.description}</p> -
        <p>Lucky Color:{this.props.eastern.lucky_color} </p> -
        <p>Lucky Number:{this.props.eastern.lucky_number} </p>
        <img src={this.props.eastern.img_url} />
        <EasternList partners={this.state.partners} />
      </div>
    )
  }
}
export default EasternContainer
