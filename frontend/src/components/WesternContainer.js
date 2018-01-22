import React from 'react'
class WesternContainer extends React.Component
{

  constructor()
  {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render()
  {
    let description = ""
    if (this.state.clicked) {
      description = <div>
        <img src={this.props.western.img_url} />
        <p>Element: {this.props.western.element}</p> -
        <p>Quality: {this.props.western.quality}</p> -
        <p>Planet: {this.props.western.planet}</p> </div>
    }
    // t.string "sign"
    // t.string "element"
    // t.string "quality"
    // t.string "planet"
    // t.integer "user_id"
    // t.string "img_url"
    // t.string "description"

    return(
      <div>
        <h1 onClick={this.handleClick}>Sign: {this.props.western.sign}</h1>
        {description}
      </div>
    )
  }
}
export default WesternContainer
