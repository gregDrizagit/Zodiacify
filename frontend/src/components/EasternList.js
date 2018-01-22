import React from 'react'

const EasternList = (props) =>
{

  const renderCompatibleUsers = () => {
    return props.users.filter(user =>
      props.partners.includes(user.eastern.sign)
    )
  }

  const partnerLi = props.partners.map((partner) => <li>{partner.sign}</li>)

  return(
    <div>
      <p>Eastern Zodiac Compatibilities: </p>
      <ul>{partnerLi}</ul>
    </div>
  )
}
export default EasternList
