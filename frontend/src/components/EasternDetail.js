import React from 'react'
import EasternSignCard from './EasternSignCard'

class EasternDetail extends React.Component {


  render() {
    return (
      <div>
        {this.props.allSigns.map(
          sign => <EasternSignCard sign={sign}/>
        )}
      </div>
    )
  }
}

export default EasternDetail
