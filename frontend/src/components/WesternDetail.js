import React from 'react'
import WesternSignCard from './WesternSignCard'

class WesternDetail extends React.Component {


  render() {
    return (
      <div>
        {this.props.allSigns.map(
          sign => <WesternSignCard sign={sign}/>
        )}
      </div>
    )
  }
}

export default WesternDetail
