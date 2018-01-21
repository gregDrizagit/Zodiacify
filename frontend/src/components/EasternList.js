import React from 'react'

const EasternList = (props) =>
{
  const partnerLi = props.partners.map((partner) => <li>{partner.sign}</li>)

  return(
    <div>
      <p>Eastern Zodiac Compatibilities: </p>
      <ul>{partnerLi}</ul>
    </div>
  )
}
export default EasternList
