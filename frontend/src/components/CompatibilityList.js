import React from 'react'
import CompatibilityCard from './CompatibilityCard'

const CompatibilityList = (props) => {
  console.log(props)
   const compatibilityCards = props.users.map(user=>{return <dl><CompatibilityCard renderPartner={props.renderPartner} user={user}/></dl>})
  return(
    <div>
      <h2>Compatible Users:</h2>
      <ul>{props.users.length === 0 ? <p>Oh dear...No matches for you...</p> : compatibilityCards}</ul>
    </div>
  )
}

export default CompatibilityList
