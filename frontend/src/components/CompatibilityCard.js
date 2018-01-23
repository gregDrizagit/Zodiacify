import React from 'react'
  const CompatibilityCard = (props) =>
  {
    return(
      <div>
        <h3 onClick={()=>props.renderPartner(props.user)}>{props.user.full_name} - {props.user.eastern.sign}</h3>
      </div>
    )
  }
export default CompatibilityCard
