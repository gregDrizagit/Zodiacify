import React from 'react'
  const CompatibilityCard = (props) =>
  {
    return(
      <a className="user">
        <h3 onClick={()=>props.renderPartner(props.user)}>{props.user.full_name} - {props.user.eastern.sign}</h3>
      </a>
    )
  }
export default CompatibilityCard
