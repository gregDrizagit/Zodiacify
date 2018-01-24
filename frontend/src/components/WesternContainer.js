import React from 'react'
class WesternContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = () => (
    this.setState({
      clicked: !this.state.clicked
    })
  )

  render()
  {
    console.log(this.props.currentUser.western)
    const front = (
      <div className="ui card" onClick={this.handleClick}>
        <a class="image" href="#">
          <img src={this.props.currentUser.western.img_url}/>
        </a>
        <div className="content">
          <a className="header" href="#"> {this.props.currentUser.western.sign}</a>
        <div className="meta">
          <a className="header">Element: {this.props.currentUser.western.element}</a>
        </div>
        <div className="meta">
          <a className="header">Planet: {this.props.currentUser.western.planet}</a>
        </div>
        </div>
      </div>)

    const back = (
      <div className="ui card" onClick={this.handleClick}>
        <div className="content">
          <div className="header">Trait:</div>
          <div className="description">
            <p>{this.props.currentUser.western.description}</p>
          </div>
          <div className="header">January Horoscope:</div>
          <div className="description">
            <p>{this.props.currentUser.western.horoscope}</p>
          </div>
        </div>
      </div>
    )

    return(
      <div>
          {this.props.currentUser.western ?
        <div>
          {this.state.clicked ? back : front}
        </div>
        :
        <p>Loading</p>}
      </div>
    )
  }
}
export default WesternContainer

// <h1>{this.props.currentUser.western.sign}</h1>
// // <p>{this.props.currentUser.western.element}</p> -
//   <p>{this.props.currentUser.western.quality}</p> -
//     <p>{this.props.currentUser.western.planet}</p> -
//       <p>{this.props.currentUser.western.description}</p> -
