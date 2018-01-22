import React from 'react'
import Adapter from '../adapter';
import MyPage from './MyPage'

//NOTE: 1.21 will there be links to get compatibilities? info on other signs? a navbar up top?

class UserContainer extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      users: [],
      allEast: [],
      currentUser:"",
      easternSign:"",
      westernSign:{}
    }
  }

  componentDidMount()
  {

    this.setState({
      users: this.props.users,
      currentUser: this.props.currentUser,
      allEast: this.props.allEast
    },
    this.setSigns()
    )

  }

  setSigns = () => {

    this.setState({
      easternSign: this.calcuateChineseSign(),
      westernSign: this.calculateWesternSign()
    })
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
    //We're doing something a little bit tricky here to associate our user with our eastern and western signs.
    //We're using look
    let easternId = this.getSignDatabaseId()
    Adapter.patchSignsToUser(this.state.currentUser, easternId, this.state.westernSign.databaseId)
  }

  calculateWesternSign = () =>
  {
    // assign all the user birth years to 1900
    const birthday = new Date(this.props.currentUser.birthdate)
    birthday.setFullYear(1900)
    let zodiac =
    {
      aries: [new Date("1900-3-21"), new Date('1900-4-20'), 1],
      taurus: [new Date("1900-4-21"), new Date("1900-5-20"), 2],
      gemini: [new Date("1900-5-21"), new Date("1900-6-20"), 3],
      cancer: [new Date("1900-6-21"), new Date("1900-7-21"), 4],
      leo: [new Date("1900-7-22"), new Date("1900-8-22"), 5],
      virgo: [new Date("1900-8-23"), new Date("1900-9-21"), 6],
      libra: [new Date("1900-9-22"), new Date("1900-10-21"), 7],
      scorpio: [new Date("1900-10-22"), new Date("1900-11-21"), 8],
      sagittarius: [new Date("1900-11-22"), new Date("1900-12-21"), 9],
      capricorn: [new Date("1900-12-22"), new Date("1900-1-20"), 10],
      aquarius: [new Date("1900-1-21"), new Date("1900-2-19"), 11],
      pisces: [new Date("1900-2-20"), new Date("1900-3-20"), 12]
    }
     const userSign = Object.keys(zodiac).find(sign =>
       birthday >= zodiac[sign][0] && birthday <= zodiac[sign][1])
     return {sign: userSign, databaseId: zodiac[userSign][2]}
  }

calcuateChineseSign = () =>
{
  const birthday = new Date(this.props.currentUser.birthdate).getUTCFullYear()
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

  render(){

    console.log('PARENT in user render', this.state);
    return(
      <div>
        <MyPage
          users={this.state.users} currentUser={this.state.currentUser}
          allEast={this.state.allEast}
          eastern={this.state.easternSign}
          western={this.state.westernSign} />
      </div>
    )
  }
}

export default UserContainer
