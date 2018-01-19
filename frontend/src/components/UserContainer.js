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
      currentUser:""
    }

  }
  componentDidMount()
  {
    this.setState({
      users: this.props.users,
      currentUser: this.props.currentUser
    }, () => this.calcuateChineseSign())

  }


  getUsers = () =>
  {
    return Adapter.getUsers()
  }

  // saveUser = (e) => // move this too?
  // {
  //   debugger
  //   Adapter.postUser(props.fullName, props.birthdate)
  //   .then(() => )
  // }

  calculateWesternSign = () =>
  {
    // assign all the user birth years to 1900
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
  //   Object.keys(zodiac).find(sign =>
  //   elli.birthdate >= zodiac[sign][0] && elli.birthdate <= zodiac[sign][1]
  // )
  }

calcuateChineseSign = () =>
{
 const jiazi = 1924;
 const years = {}
 const signs = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig"];
 let animalsIndex = 0
 for(let i = 1924; i < 2024; i++)
 {
   years[i] = signs[animalsIndex]
 animalsIndex === signs.length-1 ? animalsIndex = 0 : animalsIndex++


 }
 debugger
 return years
}


  render()
  { console.log('in render', this.state.users)
    return(
      <div>
        {<h1>Welcome {this.state.currentUser.full_name}</h1>}
        <MyPage />
      </div>
    )
  }
}
export default UserContainer
