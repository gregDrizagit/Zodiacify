import React from 'react'
import CompatibilityCard from './CompatibilityCard'
  const CompatibilityList = (props) =>
  {
    console.log(props)
     const compatibilityCards = props.users.map(user=>{return <li><CompatibilityCard user={user}/></li>})
    return(
      <ul>{compatibilityCards}</ul>
    )
  }
export default CompatibilityList
