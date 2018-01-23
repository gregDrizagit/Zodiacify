import React from 'react'
class WesternContainer extends React.Component
{


  render()
  {
    console.log(this.props.currentUser.western)
    return(
      <div>
        <h1>Western Horoscope </h1>
          {this.props.currentUser.western ?
        <div>
          <h1>{this.props.currentUser.western.sign}</h1>
          <p>{this.props.currentUser.western.element}</p> -
          <p>{this.props.currentUser.western.quality}</p> -
          <p>{this.props.currentUser.western.planet}</p> -
          <p>{this.props.currentUser.western.description}</p> -
        </div>
        :
        <p>Loading</p>}
      </div>
    )
  }
}
export default WesternContainer
