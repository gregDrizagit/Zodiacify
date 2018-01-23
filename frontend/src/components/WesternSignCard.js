import React from 'react'

class WesternSignCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const detail = (<div className='column'>
      <p>Traits: {this.props.sign.description}</p>
      <p>Planet: {this.props.sign.planet}</p>
      <p>Quality: {this.props.sign.quality}</p>
      </div>)
    return (
      <div className="ui relaxed two column grid">
        <div
        className="column"
        onClick={this.handleClick}><center>
          <img src={this.props.sign.img_url} />
          <p>{this.props.sign.sign}</p>
        </center></div>
        {this.state.clicked ? detail : ""}
      </div>
    )
  }
}



export default WesternSignCard
