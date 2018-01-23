import React from 'react'
import CompatibilityCard from './CompatibilityCard'
  const CompatibilityList = (props) =>
  {
    console.log(props)
     const compatibilityCards = props.users.map(user=>{return <li><CompatibilityCard renderPartner={props.renderPartner} user={user}/></li>})
    return(
      <div>
        <h3>Compatible Users</h3>
        <ul>{compatibilityCards}</ul>
      </div>
    )
  }
export default CompatibilityList
