import React from 'react'
class WesternContainer extends React.Component
{

  constructor()
  {
    super()
    this.state = {

    }
  }

  render()
  {
    console.log("western container", this.props.western)
    return(
      <p>Western Container</p>
    )
  }
}
export default WesternContainer
