import React from 'react'
  const CompatibilityCard = (props) =>
  {
    return(
      <div>
        <h3>{props.user.full_name} - {props.user.eastern.sign}</h3>
      </div>
    )
  }
export default CompatibilityCard
