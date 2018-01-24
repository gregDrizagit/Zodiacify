import React from 'react'
import Adapter from '../adapter';
import MyPage from './MyPage'

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("user container mounting")
    // debugger
    this.state = {
      easternSign: "",
      westernSign: "",
      partnerProf: ""
    }
  }

  componentDidMount() {
    // !this.props.currentUser.eastern && !this.props.currentUser.western
    console.log("in user mount", this.props.currentUser);
    if (!this.props.currentUser) {
    } else {
      // debugger
      this.updateUserSigns()
    }
  }

  getSignDatabaseId = () => {
    const signs = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig"];
    return signs.indexOf(this.calculateChineseSign()) + 1
  }

  updateUserSigns = () => {
    let easternId = this.getSignDatabaseId()
    let westernId = this.calculateWesternSign()
    console.log("patch")
    Adapter.patchSignsToUser(this.props.currentUser, easternId, westernId.databaseId).then(user => this.setState({currentUser: user}))
  }

  calculateWesternSign = () => {
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

calculateChineseSign = () => {
  const birthday = new Date(this.props.currentUser.birthdate).getUTCFullYear()
  const jiazi = 1924;
  const signs = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig"];

  const years = {}
  let animalsIndex = 0
  for(let i = jiazi; i < 2024; i++) {
   years[i] = signs[animalsIndex]
   animalsIndex === signs.length-1 ? animalsIndex = 0 : animalsIndex++
  }
  return years[birthday]
}

  renderPartner = (user) => {
    this.setState({
      partnerProf: user
    })
  }

  render(){
    console.log("in user container", this.state);
    return(
      <div>
        {this.props.users && this.props.currentUser && this.props.currentUser.eastern && this.props.currentUser.western ?
          <div className='ui relaxed two column grid'>
            <div className="column"><center>
              <MyPage renderPartner={this.renderPartner} users={this.props.users} currentUser={this.props.currentUser} />
            </center></div>

          {this.state.partnerProf ?
            <div className="column">
              <MyPage renderPartner={this.renderPartner} users={this.props.users} currentUser={this.state.partnerProf} />
            </div>
            :
            ""
          }
          </div>
          :
          <h1>Loading</h1>
        }
      </div>
    )
  }
}

export default UserContainer
