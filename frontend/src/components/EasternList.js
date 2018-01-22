import React from 'react'

const EasternList = (props) =>
{
  const arrOfPartners = props.partners.map(partner => partner.sign)

  const filteredCompatibleUsers = () => {
    if (!props.users.map(user => !!user.eastern).includes(false)) {
      props.users.filter(user =>
        arrOfPartners.includes(user.eastern.sign))
    } else {return "nada"}
  }

  const renderCompatibleUsers = filteredCompatibleUsers.map(user => <li>{user.full_name}</li>)

  const pleaseRender = () => {
    if (filteredCompatibleUsers !== "nada") {
      return renderCompatibleUsers()
    } else {
      debugger
       return <li>No compatibility for you yet</li>
    }
  }

  return(

    <div>
      {  !props.partners && !props.users ? "Loading..." :
        <div>
          <p>Eastern Zodiac Compatibilities: </p>
          <ul>{pleaseRender()}</ul>
        </div>
      }
    </div>
  )
}
export default EasternList
