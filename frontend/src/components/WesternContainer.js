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
    // t.string "sign"
    // t.string "element"
    // t.string "quality"
    // t.string "planet"
    // t.integer "user_id"
    // t.string "img_url"
    // t.string "description"
    console.log(this.props.western)
    return(
      <div>
        <h1>Sign: {this.props.western.sign}</h1>
        <p>Element: {this.props.western.element}</p> -
        <p>Quality: {this.props.western.quality}</p> -
        <p>Planet: {this.props.western.planet}</p> -
        <img src={this.props.western.img_url} />
      </div>
    )
  }
}
export default WesternContainer
