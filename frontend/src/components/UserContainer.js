import React from 'react'
import Adapter from '../adapter';
import MyPage from './MyPage'

class UserContainer extends React.Component
{

  constructor()
  {
    super()
    this.state = {
      users: [],
      currentUser:"",
      easternSign:"",
      westernSign:""
    }

  }
  componentDidMount()
  {
    this.setState({
      users: this.props.users,
      currentUser: this.props.currentUser
    },
    () => this.setState({easternSign: this.calcuateChineseSign(),
          westernSign: this.calculateWesternSign()})

    )
  }
  componentDidUpdate()
  {
    if(this.state.easternSign !== "" && this.state.westernSign !== "")
    {
      this.updateUserSigns()
    }
  }

  getUsers = () =>
  {
    return Adapter.getUsers()
  }
  getSignDatabaseId = () =>
  {
    const signs = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig"];
    return signs.indexOf(this.state.easternSign) + 1
  }

  updateUserSigns = () => // move this too?
  {
    let easternId = this.getSignDatabaseId()
    Adapter.patchSignsToUser(this.state.currentUser, easternId, 5)

  }

  calculateWesternSign = () =>
  {
    // assign all the user birth years to 1900
    const birthday = new Date(this.state.currentUser.birthdate)
    birthday.setFullYear(1900)
    let zodiac =
    {
      aries: [new Date("1900-3-21"), new Date('1900-4-20')],
      taurus: [new Date("1900-4-21"), new Date("1900-5-20")],
      gemini: [new Date("1900-5-21"), new Date("1900-6-20")],
      cancer: [new Date("1900-6-21"), new Date("1900-7-21")],
      leo: [new Date("1900-7-22"), new Date("1900-8-22")],
      virgo: [new Date("1900-8-23"), new Date("1900-9-21")],
      libra: [new Date("1900-9-22"), new Date("1900-10-21")],
      scorpio: [new Date("1900-10-22"), new Date("1900-11-21")],
      sagittarius: [new Date("1900-11-22"), new Date("1900-12-21")],
      capricorn: [new Date("1900-12-22"), new Date("1900-1-20")],
      aquarius: [new Date("1900-1-21"), new Date("1900-2-19")],
      pisces: [new Date("1900-2-20"), new Date("1900-3-20")]
    }
     const userSign = Object.keys(zodiac).find(sign =>
       birthday >= zodiac[sign][0] && birthday <= zodiac[sign][1])
     return userSign
  }

calcuateChineseSign = () =>
{

  const birthday = new Date(this.state.currentUser.birthdate).getUTCFullYear()
  const jiazi = 1924;
  const signs = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig"];

  const years = {}
  let animalsIndex = 0
  for(let i = jiazi; i < 2024; i++)
  {
   years[i] = signs[animalsIndex]
   animalsIndex === signs.length-1 ? animalsIndex = 0 : animalsIndex++
  }
  return years[birthday]
}

  render()
  {
    return(
      <div>
        {<h1>Welcome {this.state.currentUser.full_name}</h1>}
        <MyPage users={this.state.users} />
      </div>
    )
  }
}
export default UserContainer
