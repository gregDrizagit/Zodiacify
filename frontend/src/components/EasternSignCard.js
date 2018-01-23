import React from 'react'

class EasternSignCard extends React.Component {
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
    const detail = (<div className='column signTile'>
      <p>Traits: {this.props.sign.description}</p>
      <p>Lucky Number: {this.props.sign.lucky_number}</p>
      <p>Lucky Color: {this.props.sign.lucky_color}</p>
      </div>)
    return (
      <div className="ui relaxed two column grid">
        <div
        className="column"
        onClick={this.handleClick}><center>
          <img src={this.props.sign.img_url}/>

        </center></div>
        {this.state.clicked ? detail : ""}
      </div>
    )
  }
}



export default EasternSignCard
